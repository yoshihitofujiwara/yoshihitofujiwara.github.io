/*--------------------------------------------------------------------------
	load modules
--------------------------------------------------------------------------*/
const $ = {
	browserSync: require("browser-sync"),
	gulp: require("gulp"),
	plugins: require("gulp-load-plugins")(),
	webpack: require("webpack"),
	webpackStream: require("webpack-stream"),
	webpackConfig: require("./webpack.config")
};


/*--------------------------------------------------------------------------
	config
--------------------------------------------------------------------------*/
// フォルダパス設定
const PATH = {
	develop: "develop/", // 開発用ディレクトリ
	htdocs: "htdocs/"   // 公開用ディレクトリ
};

// リリースモード判定フラグ
const IS_REL = !!(process.argv[2] && process.argv[2].indexOf("-rel") != -1);
console.log(`gulp: ${IS_REL}`);


/*--------------------------------------------------------------------------
	default
--------------------------------------------------------------------------*/
$.gulp.task("default", [
	"webpack",
	"sass",
	"browserSync",
	"watch"
]);


/*--------------------------------------------------------------------------
	watch
--------------------------------------------------------------------------*/
$.gulp.task("watch", () => {
	$.gulp.watch([PATH.develop + "css/**/*.scss"], ["sass"]);
	$.gulp.watch([PATH.develop + "js/**/*.js"], ["webpack"]);
	$.gulp.watch([
		PATH.htdocs + "**/*.html",
		PATH.htdocs + "assets/css/**/*.css"
	])
	.on("change", () => {
		$.browserSync.reload();
	});
});


/*--------------------------------------------------------------------------
	browserSync
--------------------------------------------------------------------------*/
$.gulp.task("browserSync", () => {
	$.browserSync.init({
		server: {
			baseDir: PATH.htdocs
		}
	});
});


/*--------------------------------------------------------------------------
	css
--------------------------------------------------------------------------*/
$.gulp.task("sass", () => {
	$.plugins.rubySass(PATH.develop + "css/**/*.scss", {
		style: IS_REL ? "compressed" : "expanded"
	})
		.pipe($.plugins.plumber())
		.pipe($.plugins.pleeease({
			browsers: ["last 2 version", "Android 4.4"],
			minifier: false,
			sourcemaps: false,
			mqpacker: false
		}))
		.pipe($.gulp.dest(PATH.htdocs + "assets/css/"));
});


/*--------------------------------------------------------------------------
	webpack
--------------------------------------------------------------------------*/
$.gulp.task("webpack", () => {
	$.gulp.src([PATH.develop + "js/**/*.js"])
		.pipe($.plugins.plumber())
		.pipe($.webpackStream($.webpackConfig, $.webpack))
		.pipe($.gulp.dest(PATH.htdocs + "assets/js/"));
});
