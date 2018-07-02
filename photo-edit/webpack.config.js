const webpack = require("webpack");
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

// リリースモード判定フラグ
const IS_PRODUCTION = !!(process.argv[2] && process.argv[2].indexOf("-pro") != -1);

const MODE = IS_PRODUCTION ? "production" : "development";
console.log(`webpack mode: ${MODE}`);


// js file path
const JS = `${__dirname}/src/js/`;


/*--------------------------------------------------------------------------
  options setting
--------------------------------------------------------------------------*/
let plugins = [];
// providePlugin
// plugins.push(
// 	new webpack.ProvidePlugin({
// 		$: "jquery",
// 		INK: "ink-javascript"
// 	})
// );


let optimization = {};
if(IS_PRODUCTION){
	optimization.minimizer = new UglifyJSPlugin({
		compress: { drop_console: true},
		comments: require("uglify-save-license")
	});
}

// optimization.splitChunks = {
// 	cacheGroups: {
// 		// node_modules配下のモジュールをバンドル対象とする
// 		vendors: {
// 			test: /node_modules/,
// 			name: "libs",
// 			// minSize: 1,
// 			// minChunks: 2,
// 			chunks: "initial",
// 			enforce: true
// 		},
// 		// src/js/modules配下のモジュールをバンドル対象とする
// 		modules: {
// 			test: /src\/js\/modules/,
// 			name: "modules",
// 			chunks: "initial",
// 			enforce: true
// // 		}
// 	}
// };


/*--------------------------------------------------------------------------
  module
--------------------------------------------------------------------------*/
module.exports = {
	watch: true,
	mode: MODE,

  entry: {
    "libs": `${JS}libs/index.js`,
    "000": `${JS}/000/index.js`,
    "001": `${JS}/001/index.js`,
  },

  output: {
    filename: "[name].js"
  },

  module: {
    rules: [
      {
        test: /\.js[x]?$/,
        use: [{
          loader: "babel-loader",
          options: {
            presets: [["env", {
							targets: { browsers: ["last 2 versions"] },
							modules: false
            }]]
          }
        }],
        exclude: /node_modules/,
      },
      {
        test: /\.(glsl|frag|vert)$/,
        loader: "glslify-import-loader",
        exclude: /node_modules/
      },
      {
        test: /\.(glsl|frag|vert)$/,
        loader: "raw-loader",
        exclude: /node_modules/
      },
      {
        test: /\.(glsl|frag|vert)$/,
        loader: "glslify-loader",
        exclude: /node_modules/
      },
      {
        test: /\.(glsl|frag|vert)$/,
        loader: "glsl-strip-comments",
        exclude: /node_modules/
      }
    ]
  },

  plugins: plugins,

	optimization: optimization
};
