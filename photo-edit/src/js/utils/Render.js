export default class Render {
	/**
	 * constructor
	 * @param  {jQuery} $container canvas container
	 * @param  {Object} oprions
	 */
	constructor ($container, options) {
		this.$container = $container;
		this.width = 600;
		this.height = 480;

		this.options = $.extend(true, {
      is3D        : false,
      isController: false,
      isAxis      : false,
      isGui       : true
		}, options);

		this.startTime = null;
		this.time = null;

		// event: [start, stop, resize, update]
		this.event = new AMP.Events();

		this.isDebug = -1 < location.href.indexOf('http://localhost');

		// stats
		this.stats = new Stats();
		this.$container[0].appendChild(this.stats.dom);

		if(this.isDebug){
			$(this.stats.domElement).css({display: 'block'});
		} else {
			$(this.stats.domElement).css({display: 'none'});
		}

		// gui
		if(this.options.isGui){
			this.gui = new dat.GUI();
			this.gui.commonFolder = this.gui.addFolder("common");

			if(!AMP.hasHash("guiopen")){
				this.gui.close();
			}
			this.gui.params = {};

			this.gui.params.stats = this.isDebug;

      this.gui.commonFolder.add(this.gui.params, 'stats').name('FPS Metor').onChange(() => {
        if(this.gui.params.stats){
          $(this.stats.domElement).css('display', 'block');
        } else {
          $(this.stats.domElement).css('display', 'none');
        }
      });

			if(this.isDebug){
				this.gui.open();
			}
		}

		// input file
		let $file = $("#file");
		if($file[0]){
			let fileReader  = new FileReader(),
			img = new Image();

			$file.change(function() {
	      if(this.files && this.files[0] &&
	        this.files[0].type.indexOf("image/") > -1
	      ){
	      	fileReader.readAsDataURL(this.files[0]);
	    	}
        $(this).val("");
			});

	    fileReader.addEventListener('load', (event)=>{
	    	img.src = event.target.result;
	    	this.event.trigger("inputImg", img);
	    });

			this.gui.params.inputFile = function(){
				$file.click();
			}
			this.gui.commonFolder.add(this.gui.params, "inputFile");
		}

		this._animationId = null;

		this.renderer = new THREE.WebGLRenderer({
			preserveDrawingBuffer: true
		});
		this.renderer.setClearColor(0x000000);
		this.renderer.setPixelRatio(window.devicePixelRatio);
		// this.renderer.setPixelRatio(1);
		// this.renderer.setSize(this.width, this.height);
		this.scene = new THREE.Scene();


		// saveFile
		function Base64toBlob(base64){
			var tmp = base64.split(',');
			var data = atob(tmp[1]);
			var mime = tmp[0].split(':')[1].split(';')[0];
			var buf = new Uint8Array(data.length);
			for (var i = 0; i < data.length; i++) {
				buf[i] = data.charCodeAt(i);
			}
			var blob = new Blob([buf], { type: mime });
		  return blob;
		}

		function saveBlob(blob, fileName){
		  var url = (window.URL || window.webkitURL);
		  var dataUrl = url.createObjectURL(blob);
		  var event = document.createEvent("MouseEvents");
		  event.initMouseEvent("click", true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
		  var a = document.createElementNS("http://www.w3.org/1999/xhtml", "a");
		  a.href = dataUrl;
		  a.download = fileName;
		  a.dispatchEvent(event);
		}

		this.gui.params.saveFile = () => {
			let base64 = this.renderer.domElement.toDataURL();
			let blob = Base64toBlob(base64);
	    saveBlob(blob, "img" + $.now() +".jpg");
		}

		this.gui.commonFolder.add(this.gui.params, "saveFile");


		// Camera: 2D or 3D
		if(this.options.is3D){
			this.camera = new THREE.PerspectiveCamera(90, this.width / this.height, 0.1, 1000);
			this.camera.position.set(0, 0, 5);
			this.camera.aspect = this.width / this.height;

			if(this.options.isController){
				this.controller = new THREE.OrbitControls(this.camera, this.renderer.domElement);
				this.controller.autoRotate = false;
				this.controller.autoRotateSpeed = 5.0;
			}

		} else {
			this.camera = new THREE.Camera();
			// this.camera = new THREE.OrthographicCamera(this.width/-2,this.width/2,this.height/2,this.height/-2, 0.1 , 10000);
			// this.camera.up.set(0,0,1);
			// this.camera.position.z = 1;
		}

		// AxisHelper
		if(this.options.isAxis){
			this.axis = new THREE.AxisHelper(1000);
			this.scene.add(this.axis);
		}

		this.$container[0].appendChild(this.renderer.domElement);

		// @resize
		// $(window).resize(this.resize.bind(this));
	}


	/**
	 * start
	 */
	start(){
		this.startTime = AMP.now();
		cancelAnimationFrame(this._animationId);
		this.event.trigger('start', this);
		this.update();
	}


	/**
	 * stop
	 */
	stop(){
		cancelAnimationFrame(this._animationId);
		this.event.trigger('stop', this);
	}


	/**
	 * update
	 */
	update(){
		this.time = (AMP.now() - this.startTime) / 1000;
		this._animationId = requestAnimationFrame(this.update.bind(this));

		this.event.trigger('update', this);

		if(this.controller){
			this.controller.update();
		}

		this.render();

		if(this.gui.params.stats){
			this.stats.update();
		}
	}


	/**
	 * render description
	 */
	render(){
		this.renderer.render(this.scene, this.camera);
	}


	/**
	 * resize
	 */
	resize(width, height){
		this.width = width;
		this.height = height;

		this.renderer.setSize(this.width, this.height);

		if(this.options.is3D){
			this.camera.aspect = this.width / this.height;
	  	this.camera.updateProjectionMatrix();
		} else {
      // this.camera.left = -this.width / 2;
      // this.camera.right = this.width / 2;
      // this.camera.top = this.height / 2;
      // this.camera.bottom = -this.height / 2;
		}
		this.event.trigger('resize', this);
	}
}
