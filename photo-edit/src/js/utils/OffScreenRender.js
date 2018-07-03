export default class OffScreenRender {
	/**
	 * constructor
	 * @param  {jQuery} $container canvas container
	 * @param  {Object} oprions
	 */
	constructor ($canvas, options) {
		let _options = $.extend(true, {
			width: 600,
			height: 480
		}, options);

		this.app = new PIXI.Application({
			width: _options.width,
			height: _options.height,
			view: $canvas[0],
			antialias: true,
			// resolution: devicePixelRatio
			// preserveDrawingBuffer: true,
			// backgroundColor: 0xff9900
			// transparent: true,
			// resolution: 1,
		});
	}


	/**
	 * start
	 */
	start(){
	}


	/**
	 * stop
	 */
	stop(){
	}


	/**
	 * update
	 */
	update(){
	}


	/**
	 * render description
	 */
	render(){
	}


	/**
	 * clear
	 */
	clear(){
		this.app.removeChildren();
	}


	/**
	 * resize
	 */
	resize(width, height){
		this.app.renderer.resize(width, height);
		// this.app.renderer.width = width;
		// this.app.renderer.height = height;
	}
}
