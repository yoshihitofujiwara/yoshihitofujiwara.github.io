//SetUp Argon
var app = Argon.init();

//SetUp THREE
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera();
var userLocation = new THREE.Object3D();
scene.add(camera);
scene.add(userLocation);
// We use the standard WebGLRenderer
var renderer = new THREE.WebGLRenderer({
    alpha: true,
    logarithmicDepthBuffer: false
});
// account for the pixel density of the device
renderer.setPixelRatio(window.devicePixelRatio);
app.view.element.appendChild(renderer.domElement);
// to easily control stuff on the display
var hud = new THREE.CSS3DArgonHUD();
var description = document.getElementById('description');
hud.hudElements[0].appendChild(description);
app.view.element.appendChild(hud.domElement);
var stats = new Stats();
hud.hudElements[0].appendChild(stats.dom);
app.context.setDefaultReferenceFrame(app.context.localOriginEastUpSouth);
var uniforms = {
    amplitude: { type: "f", value: 0.0 }
};
var argonTextObject = new THREE.Object3D();
argonTextObject.position.z = -0.50;
userLocation.add(argonTextObject);

//Texture
try {
    var loader = new THREE.TextureLoader();
    loader.crossOrigin = "*";
    loader.load(".png", function (tex) {
        var geometry = new THREE.PlaneGeometry(202.4, 101.2);
        mesh = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({ map: tex }));
        argonTextObject.add(mesh);
        argonTextObject.scale.set(0.001, 0.001, 0.001);
        console.log("loaded");
    });
} catch (e) {
    console.error(e.toString());
}

app.vuforia.isAvailable().then(function (available) {
    if (!available) {
        console.warn("vuforia not available on this platform.");
        return;
    }
    app.vuforia.init({
        encryptedLicenseData: `-----BEGIN PGP MESSAGE-----
-----END PGP MESSAGE-----
`
    }).then(function (api) {
        api.objectTracker.createDataSet(".xml").then(function (dataSet) {
            dataSet.load().then(function () {
                var trackables = dataSet.getTrackables();
                var gvuBrochureEntity = app.context.subscribeToEntityById(trackables[""].id);
                var gvuBrochureObject = new THREE.Object3D;
                scene.add(gvuBrochureObject);
                app.context.updateEvent.addEventListener(function () {
                    var gvuBrochurePose = app.context.getEntityPose(gvuBrochureEntity);
                    if (gvuBrochurePose.poseStatus & Argon.PoseStatus.KNOWN) {
                        gvuBrochureObject.position.copy(gvuBrochurePose.position);
                        gvuBrochureObject.quaternion.copy(gvuBrochurePose.orientation);
                        //argonTextObject.quaternion.copy(gvuBrochurePose.orientation);
                    }
                    if (gvuBrochurePose.poseStatus & Argon.PoseStatus.FOUND) {
                        gvuBrochureObject.add(argonTextObject);
                        argonTextObject.position.z = 0;
                        argonTextObject.scale.set(0.5, 0.5, 0.5);
                        console.log("vuforia is FOUND IT!!");
                    } else if (gvuBrochurePose.poseStatus & Argon.PoseStatus.LOST) {
                        argonTextObject.position.z = -0.50;
                        argonTextObject.scale.set(0.0001, 0.0001, 0.0001);
                        userLocation.add(argonTextObject);
                        console.log("vuforia is LOST...");
                    }
                });
            }).catch(function (err) {
                console.log("could not load dataset: " + err.message);
            });
            api.objectTracker.activateDataSet(dataSet);
        });
    }).catch(function (err) {
        console.log("vuforia failed to initialize: " + err.message);
    });
});

app.context.updateEvent.addEventListener(function () {
    var userPose = app.context.getEntityPose(app.context.user);
    if (userPose.poseStatus & Argon.PoseStatus.KNOWN) {
        userLocation.position.copy(userPose.position);
    }
});
app.renderEvent.addEventListener(function () {
    stats.update();
    var monoMode = (app.view.getSubviews()).length == 1;
    var viewport = app.view.getViewport();
    renderer.setSize(viewport.width, viewport.height);
    hud.setSize(viewport.width, viewport.height);
    for (var _i = 0, _a = app.view.getSubviews(); _i < _a.length; _i++) {
        var subview = _a[_i];
        // set the position and orientation of the camera for 
        // this subview
        camera.position.copy(subview.pose.position);
        camera.quaternion.copy(subview.pose.orientation);
        // the underlying system provide a full projection matrix
        // for the camera. 
        camera.projectionMatrix.fromArray(subview.projectionMatrix);
        // set the viewport for this view
        var _b = subview.viewport, x = _b.x, y = _b.y, width = _b.width, height = _b.height;
        renderer.setViewport(x, y, width, height);
        // set the webGL rendering parameters and render this view
        renderer.setScissor(x, y, width, height);
        renderer.setScissorTest(true);
        renderer.render(scene, camera);
        // adjust the hud, but only in mono
        if (monoMode) {
            hud.setViewport(x, y, width, height, subview.index);
            hud.render(subview.index);
        }
    }
});
