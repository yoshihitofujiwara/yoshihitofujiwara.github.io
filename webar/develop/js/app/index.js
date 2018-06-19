/**
 * scripts.js エントリポイント
 */


// app-es
import Base from "./class/Base";
import Child from "./class/Child";
import * as utils from "./utils/utils";





/*==========================================================================
	init call
==========================================================================*/
$(function($){
	var base = new Base('Base');
	var child = new Child('Child', 999);

	utils.template();

	console.log('-----------');
	// alert("2000000000000000000");
	// alert("2000000000000000000");
	// alert("2000000000000000000");
	// alert("2000000000000000000");
	base.setup();

	console.log('-----------');
	child.setup();
});
