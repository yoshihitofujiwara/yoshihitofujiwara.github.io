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
	src: "src/", // 開発コード
	htdocs: "htdocs/"   // 公開コード
};

// 公開モードフラグ
const IS_PRODUCTION = !!(process.argv[2] && process.argv[2].indexOf("-rel") != -1);


/*--------------------------------------------------------------------------
	default
--------------------------------------------------------------------------*/
$.gulp.task("default", [
	"webpack",
	"browserSync",
	"watch"
]);


/*--------------------------------------------------------------------------
	watch
--------------------------------------------------------------------------*/
$.gulp.task("watch", () => {
	$.gulp.watch([PATH.src + "js/**/*.js"], ["webpack"]);
	$.gulp.watch([PATH.htdocs + "**/*.html"])
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
	webpack
--------------------------------------------------------------------------*/
$.gulp.task("webpack", () => {
	$.gulp.src([PATH.src + "js/**/*.js"])
		.pipe($.plugins.plumber())
		.pipe($.webpackStream($.webpackConfig, $.webpack))
		.pipe($.gulp.dest(PATH.htdocs + "js/"));
});
