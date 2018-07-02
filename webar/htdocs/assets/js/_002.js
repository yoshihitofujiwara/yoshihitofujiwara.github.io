//SETTINGS of this demo :
var SETTINGS = {
	detectionThreshold: 0.5, //sensibility, between 0 and 1. Less -> more sensitive
	detectionHysteresis: 0.1,

	rotationOffsetX: 0, //negative -> look upper. in radians
	cameraFOV: 40,      //in degrees, 3D camera FOV
	pivotOffsetYZ: [0.2, 0.2], //XYZ of the distance between the center of the cube and the pivot
	scale: 1 //scale of the 3D cube
};

//some globalz :
var renderer, camera, scene, obj, objDpivoted, videoTexture;
var isDetected = false, isLoaded = false;




/*--------------------------------------------------------------------------
	???
--------------------------------------------------------------------------*/
//recursive function to find a specific element in the AFRAME sceneGraph :
function extract_threeChildrenWithId(id, threeElt) {
	if (typeof (threeElt) === 'undefined') return false;
	if (!threeElt || !threeElt.type) return false;
	if (threeElt.el && threeElt.el.id === id) return [threeElt];
	if (!threeElt.children || threeElt.children.length === 0) return false;
	var r = [];
	threeElt.children.forEach(function (threeChild) {
		var zou = extract_threeChildrenWithId(id, threeChild);
		if (zou && zou.length) {
			r = r.concat(zou);
		}
	});
	return r;
}


/*--------------------------------------------------------------------------
	Aframe初期化
--------------------------------------------------------------------------*/
//unit modified version of Aframe. called once when Jeeliz Face Filter is OK
// function init_aFrame(spec) {
// 	AFRAMEINSTANCE = startAframe({
// 		context: spec.GL,
// 		canvas: spec.canvasElement
// 	});

// 	//get AFRAME initialized THREE.JS renderer
// 	renderer = AFRAMEINSTANCE.renderer;
// 	init_threeScene(spec);
// }


//build the 3D
function init_threeScene(spec) {
	// renderer
	renderer = new THREE.WebGLRenderer({
		context: spec.GL,
		canvas: spec.canvasElement
	});
	renderer.setClearColor(0x000000);
	renderer.setPixelRatio(window.devicePixelRatio);
	renderer.setSize(window.innerWidth, window.innerHeight);

	// scene
	scene = new THREE.Scene();

	// camera
	camera = new THREE.Camera();


	//COMPOSITE OBJECT WHICH WILL FOLLOW THE HEAD
	//in fact we create 2 objects to be able to shift the pivot point
	obj = new THREE.Object3D();
	obj.frustumCulled = false;

	objDpivoted = new THREE.Object3D();
	objDpivoted.frustumCulled = false;
	objDpivoted.position.set(0, -SETTINGS.pivotOffsetYZ[0], -SETTINGS.pivotOffsetYZ[1]);
	objDpivoted.scale.set(SETTINGS.scale, SETTINGS.scale, SETTINGS.scale);
	obj.add(objDpivoted);

	scene.add(obj);



	var threeFaceFollowers = extract_threeChildrenWithId('jeelizFaceFilterFollow', scene);
	if (!threeFaceFollowers || !threeFaceFollowers.length) {
		alert('No element with id=jeelizFaceFilterFollow has been found in the A-Frame scene. You should have at least one. Otherwise none of your stuffs will follow the head');
	} else {
		threeFaceFollowers.forEach(function (threeStuff) {
			objDpivoted.add(threeStuff);
		})
	}

	//init video texture with red
	videoTexture = new THREE.DataTexture(new Uint8Array([255, 0, 0]), 1, 1, THREE.RGBFormat);
	videoTexture.needsUpdate = true;

	//CREATE THE VIDEO BACKGROUND
	var videoMaterial = new THREE.RawShaderMaterial({
		depthWrite: false,
		vertexShader: "attribute vec2 position;\n\
            varying vec2 vUV;\n\
            void main(void){\n\
                gl_Position=vec4(position, 1., 1.);\n\
                vUV=0.5+0.5*position;\n\
            }",
		fragmentShader: "precision lowp float;\n\
            uniform sampler2D samplerVideo;\n\
            varying vec2 vUV;\n\
            void main(void){\n\
                gl_FragColor=texture2D(samplerVideo, vUV);\n\
            }",
		uniforms: {
			samplerVideo: { value: videoTexture }
		}
	});
	var videoGeometry = new THREE.BufferGeometry()
	var videoScreenCorners = new Float32Array([-1, -1, 1, -1, 1, 1, -1, 1]);
	videoGeometry.addAttribute('position', new THREE.BufferAttribute(videoScreenCorners, 2));
	videoGeometry.setIndex(new THREE.BufferAttribute(new Uint16Array([0, 1, 2, 0, 2, 3]), 1));
	var videoMesh = new THREE.Mesh(videoGeometry, videoMaterial);
	videoMesh.onAfterRender = function () {
		//replace videoTexture.__webglTexture by the real video texture
		renderer.properties.update(videoTexture, '__webglTexture', spec.videoTexture);
		delete (videoMesh.onAfterRender);
	};
	videoMesh.frustumCulled = false;
	scene.add(videoMesh);

	//CREATE THE CAMERA
	var aspecRatio = spec.canvasElement.width / spec.canvasElement.height;
	camera = new THREE.PerspectiveCamera(SETTINGS.cameraFOV, aspecRatio, 0.1, 100);

	//replace the default Aframe camera by our camera :
	// AFRAMEINSTANCE.camera = camera;


	isLoaded = true;
}

/*--------------------------------------------------------------------------
	main
--------------------------------------------------------------------------*/
function main() {

	JEEFACEFILTERAPI.init({
		canvasId: "jeeFaceFilterCanvas",
		NNCpath: "./assets/data/NNC.json",

		// callbackReady
		callbackReady: function (errCode, spec) {
			console.log("JEEFACEFILTERAPI: callbackReady");

			if (errCode) {
				console.log('AN ERROR HAPPENS. SORRY BRO :( . ERR =', errCode);
				return;
			}

			console.log('INFO : JEEFACEFILTERAPI IS READY');
			// init_aFrame(spec);
			init_threeScene(spec);
		},

		// トラック毎: callbackTrack
		callbackTrack: function (detectState) {
			if (!isLoaded) {
				return;
			}

			// https://github.com/jeeliz/jeelizFaceFilter#user-content-the-detection-state
			// console.log(detectState);

			// 検出判定
			if (isDetected && detectState.detected < SETTINGS.detectionThreshold - SETTINGS.detectionHysteresis) {
				//DETECTION LOST
				detect_callback(false);
				isDetected = false;
			} else if (!isDetected && detectState.detected > SETTINGS.detectionThreshold + SETTINGS.detectionHysteresis) {
				//FACE DETECTED
				detect_callback(true);
				isDetected = true;
			}

			// 検出できている場合オブジェクトの位置を合わせる
			if (isDetected) {
				//move the cube in order to fit the head
				var tanFOV = Math.tan(camera.aspect * camera.fov * Math.PI / 360); //tan(FOV/2), in radians
				var W = detectState.s;  //relative width of the detection window (1-> whole width of the detection window)
				var D = 1 / (2 * W * tanFOV); //distance between the front face of the cube and the camera

				//coords in 2D of the center of the detection window in the viewport :
				var xv = detectState.x;
				var yv = detectState.y;

				//coords in 3D of the center of the cube (in the view coordinates system)
				var z = -D - 0.5;   // minus because view coordinate system Z goes backward. -0.5 because z is the coord of the center of the cube (not the front face)
				var x = xv * D * tanFOV;
				var y = yv * D * tanFOV / camera.aspect;

				//move and rotate the cube
				obj.position.set(x, y + SETTINGS.pivotOffsetYZ[0], z + SETTINGS.pivotOffsetYZ[1]);
				obj.rotation.set(detectState.rx + SETTINGS.rotationOffsetX, detectState.ry, detectState.rz, "XYZ");

				obj.visible = true;

			} else {
				obj.visible = false;
			}

			//reinitialize the state of THREE.JS because JEEFACEFILTER have changed stuffs
			renderer.state.reset();

			renderer.render(scene, camera);
		}
	});
}


/*--------------------------------------------------------------------------
	顔検出: detect_callback
--------------------------------------------------------------------------*/
//callback : launched if a face is detected or lost. TODO : add a cool particle effect WoW !
function detect_callback(isDetected) {
	if (isDetected) {
		console.log('INFO in detect_callback() : DETECTED');
	} else {
		console.log('INFO in detect_callback() : LOST');
	}
}



/*==========================================================================
	load
==========================================================================*/
window.onload = function () {
	main();
}
