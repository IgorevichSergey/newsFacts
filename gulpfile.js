var gulp = require('gulp');
var plugins = require("gulp-load-plugins")({lazy: false});
var connect = require("gulp-connect");
var concat = require('gulp-concat');
var cssconcat = require('gulp-concat-css');
var runSequence = require('run-sequence');
var uncss = require('gulp-uncss');
var minifyCss = require('gulp-minify-css');

var config = {
    SCRIPTS:[
        "./app/directives/**/*.js",

        "./app/articles/articles.route.js",
        "./app/baseView/baseView.route.js",
        "./app/home/homePage.route.js",
        "./app/main.js"
    ],
    BOWER_SCRIPTS: [
        "./bower_components/angular/angular.min.js",
        "./bower_components/angular-ui-router/release/angular-ui-router.min.js",
        "./bower_components/jquery/dist/jquery.min.js",
        "./bower_components/bootstrap/dist/js/bootstrap.min.js"
    ],
    BOWER_CSS: [
        "./bower_components/bootstrap/dist/css/bootstrap.min.css"
    ],
    CSS: [
        "./app/**/*.css"
    ]
};

gulp.task('bower_css_min', function () {
    gulp.src(config.BOWER_CSS)
        .pipe(cssconcat('bower.css'))
        .pipe(minifyCss({compatibility: 'ie8'}))
        .pipe(gulp.dest('./production/css'));
});
gulp.task('templates', function () {
    gulp.src(['!./app/index.html',
        './app/**/**/*.html'])
        .pipe(plugins.angularTemplatecache('templates.js', {standalone: true}))
        .pipe(gulp.dest('./production/js'));
});
gulp.task('css_min', function () {
    gulp.src(config.CSS)
        .pipe(cssconcat('main.css'))
        .pipe(minifyCss({compatibility: 'ie8'}))
        .pipe(gulp.dest('./production/css'));
});
gulp.task('copy_html', function(){
    gulp.src('./app/index.html')
        .pipe(gulp.dest('./production'))
        .pipe(connect.reload())
});
gulp.task('bower_scripts_min',function () {
    gulp.src(config.BOWER_SCRIPTS)
        .pipe(concat('bower.js'))
        .pipe(gulp.dest('./production/js'))
});
gulp.task('scripts_min',function () {
    gulp.src(config.SCRIPTS)
        .pipe(concat('main.js'))
        .pipe(gulp.dest('./production/js'))
});
gulp.task('copy_other', function () {
    gulp.src('./fonts/**')
        .pipe(gulp.dest('./production/fonts'));
    gulp.src('./images/**')
        .pipe(gulp.dest('./production/images'));
});

gulp.task('build', function(){
    runSequence('bower_css_min', 'css_min', 'bower_scripts_min', 'templates', 'scripts_min', 'copy_other', 'copy_html',function() {
    });

});

gulp.task('watch', function () {
    gulp.watch([
        './app/**/*.html',
        './app/**/*.js',
        './app/**/*.css'
    ], ['build']);
});

gulp.task('connect', function(){
    connect.server({
        root: 'production',
        livereload: true,
        port: 8000
    })
});
//, 'watch',
gulp.task('default', [ 'connect', 'build', 'watch']);
gulp.task('build_project', ['build']);
