const webpack = require("webpack");

// リリースモード判定フラグ
const IS_REL = !!(process.argv[2] && process.argv[2].indexOf("-rel") != -1);
const IS_UPDATE_LIB = !!(process.argv[2] && process.argv[2].indexOf("-lib") != -1);
console.log(`webpack: ${IS_REL}`);

// js file path
const JS = `${__dirname}/develop/js/`;


/*--------------------------------------------------------------------------
  config
--------------------------------------------------------------------------*/
/**
 * entry
 */
let entry = {};
if (IS_REL || IS_UPDATE_LIB){
	entry.libs = `${JS}/libs/index.js`;
}
entry.app = `${JS}/app/index.js`;


/**
 * plugins
 */
let plugins = [];

if(IS_REL){
  plugins.push(
    new webpack.optimize.UglifyJsPlugin({
      // compress: { drop_console: true},
      comments: require("uglify-save-license")
    })
  );
}
plugins.push(new webpack.optimize.AggressiveMergingPlugin());


/**
 * exports
 */
module.exports = {
	entry: entry,

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
            presets: [
              ["env", {
                targets: { browsers: ["last 2 versions"] },
                modules: false
              }]
            ]
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

  // externals: [
  //   {
  //     jquery: "jQuery",
  //     $: "jQuery"
  //   }
  // ],

  plugins: plugins
};
