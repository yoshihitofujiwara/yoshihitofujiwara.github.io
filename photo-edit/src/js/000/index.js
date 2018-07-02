import Render from '../utils/Render';

let
render,
loader,
texture,
shader,
uniforms,
group,
webCamera,
img,
params = {},
is3D = false,
width = 1920,
height = 1080,
size = {
	width: 2,
	height: 2
};

if(AMP.queryHashMap().is3D){
	is3D = true;
}


/**
 * @calss Sketch
 */
class Sketch {
  /**
   * constructor
   */
	constructor() {
		loader = new THREE.TextureLoader();

		webCamera = new AMP.WebCamera($('#webcamera')[0], {
			constraints: {
				video: {
					width: width,
					height: height
				}
			}
		});

		webCamera.setup().on('load', () => {
			// webCamera.play();
			// this.setup();
		});

		render = new Render($('#canvas_container'), {
			is3D: is3D,
			isController: true
		});

		loader.load("img/photo04.jpg", (_texture) => {
			img = _texture.image;
			texture = _texture;
			texture.minFilter = THREE.LinearFilter;
			texture.magFilter = THREE.LinearFilter;
			texture.format = THREE.RGBFormat;

			this.setup();
		});
	}


	/**
	 * renderStart
	 */
	renderStart(){
		render.event.on("update", () => {
			uniforms.uTime.value = render.time;
			uniforms.uTime2.value = render.time;
		});
		render.resize(width, height);
		render.start();

		render.event.on("inputImg", (_img) => {
			loader.load(_img.src, (_texture) => {
				img = _texture.image;
				texture = _texture;
				uniforms.texture.value = texture;
				render.resize(_img.width, _img.height);
				this.generateGeometry();
			});
		})
	}


  /**
   * setup
   */
	setup() {
		let webCameraTexture = new THREE.VideoTexture(webCamera.video);
		webCameraTexture.minFilter = THREE.LinearFilter;
		webCameraTexture.magFilter = THREE.LinearFilter;
		webCameraTexture.format = THREE.RGBFormat;

		let textureObj = {
			types: ["image", "webCamera"],
			texture: "image",
			image: texture,
			webCamera: webCameraTexture
		};

		uniforms = {
			texture: { type: "t", value: texture },
			resolution: { type: "v2", value: new THREE.Vector2(1920, 1080) },
			uTime: { type: "f", value: 0.0 },
			uTime2: { type: "f", value: 0.0 },
			uRgbShift: { type: "b", value: true },
			uGap: { type: "i", value: 0 },
			uAmount: { type: "f", value: 10 },
			uAngle: { type: "f", value: 0 },
			uRandom: { type: "b", value: false },
			uUpdateSpeed: { type: "f", value: 0 },

      uCurlAmount : { type: "f", value: 100},
      uZamount    : { type: "f", value: 0},
      uRotationZ  : { type: "f", value: 90}
		};

		let material = new THREE.ShaderMaterial({
			vertexShader: require("../../shader/sketches/sketch.vert"),
			fragmentShader: require("../../shader/sketches/rgbShift.frag"),
			uniforms: uniforms
		});

		// custom material
		material.transparent = true;
		material.blending = THREE.NormalBlending;
		material.side = THREE.DoubleSide;


		params.Gap = "Linear";
		params.Gaps = ["Linear", "Rotate"];


		// dat gui
		render.gui.open();
		render.gui.add(material, "wireframe");

		render.gui.add(textureObj, "texture", textureObj.types).onChange((type) => {
			if (type == "webCamera") {
				webCamera.play();
			} else {
				webCamera.pause();
			}
			uniforms.texture.value = textureObj[type];
		});
		render.gui.add(uniforms.uRgbShift, 'value').name("Rgb Shift");
		render.gui.add(params, 'Gap', params.Gaps).onChange((type)=>{
			if (type == "Linear"){
				uniforms.uGap.value = 0;
			} else {
				uniforms.uGap.value = 1;
			}
		});
		render.gui.add(uniforms.uAmount, 'value', 10).min(0).max(100).name("Amount");
		render.gui.add(uniforms.uAngle, 'value', 0).min(0).max(360).name("Angle");
		render.gui.add(uniforms.uUpdateSpeed, 'value', 0).min(0).max(20).name("Update Speed").step(0.1);
		if (is3D) {
	    render.gui.add(uniforms.uZamount, 'value').min(0).max(10).step(0.01).name("Z Amount");
		}
    // render.gui.add(uniforms.uCurlAmount, 'value').min(0).max(100).step(0.1).name("Curl Amount");
    // render.gui.add(uniforms.uRotationZ, 'value').min(2).max(180).name("Rotation Z");


		if (is3D) {
			size.width = width/150;
			size.height = height/150;
		}


		group = new THREE.Group();
		let geometry = new THREE.PlaneBufferGeometry(size.width, size.width, 1, 1);
		let lineMaterial = new THREE.LineBasicMaterial( { color: 0xffffff, transparent: true, opacity: 0} );
		let mesh = new THREE.Mesh(geometry, material);

		group.add( new THREE.LineSegments( geometry, lineMaterial ) );
		group.add( mesh);

		params.widthSegments = 10;
		params.heightSegments = 10;

		render.gui.add( params, 'widthSegments', 1, 300 ).step( 1 ).onChange( this.generateGeometry.bind(this));
		render.gui.add( params, 'heightSegments', 1, 300 ).step( 1 ).onChange( this.generateGeometry.bind(this));

		render.scene.add(group);

		// render
		this.renderStart();
		this.generateGeometry();
	}


	/**
	 * [generateGeometry description]
	 * @return {[type]} [description]
	 */
	generateGeometry(){
		if(is3D){
			size.width = img.width/150;
			size.height = img.height/150;
		} else {
			size.width = 2;
			size.height = 2;
		}

		let geometry = new THREE.PlaneGeometry(size.width, size.height, params.widthSegments, params.heightSegments)
		group.children[ 0 ].geometry.dispose();
		group.children[ 1 ].geometry.dispose();
		group.children[ 0 ].geometry = new THREE.WireframeGeometry( geometry );
		group.children[ 1 ].geometry = geometry;
	}
}


/*==========================================================================
	DOM READY
==========================================================================*/
$(function () {
	new Sketch();
});
