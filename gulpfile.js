'use strict';

// Include gulp
var gulp = require('gulp');
var fs = require('fs');
var pkg = JSON.parse(fs.readFileSync('./package.json'));
var beep = require('beepbeep');
var onError = function (err) { beep(); };

// Include Our Plugins
var jshint     = require('gulp-jshint');
var nodeunit   = require('gulp-nodeunit');
var livereload = require('gulp-livereload');
var uglify     = require('gulp-uglify');
var plumber    = require('gulp-plumber');

// Lint Task
gulp.task('jshint', function() {
	return gulp.src([
			pkg.directories.lib+'/**/*.js',
		])
		.pipe(plumber({errorHandler: onError}))
		.pipe(jshint({ // see https://github.com/jshint/jshint/blob/master/examples/.jshintrc
			browser: true,
			jquery: true,
			strict: true,
			curly: true
		}))
		.pipe(jshint.reporter('default'))
		.pipe(jshint.reporter('fail'))
		.pipe(uglify())
		.pipe(gulp.dest(pkg.directories.build))
		.pipe(livereload())
	;
});

// Node Unit
gulp.task('nodeunit', function() {
	return gulp.src(pkg.directories.test + '/**/j*.js')
		.pipe(plumber({errorHandler: onError}))
		.pipe(jshint({ // see https://github.com/jshint/jshint/blob/master/examples/.jshintrc
			node: true,
			curly: true,
			undef: true,
			strict: true
		}))
		.pipe(nodeunit())
	;
});

// Watch Files For Changes
gulp.task('watch', function() {
	livereload.listen();
	gulp.watch(['gulpfile.js','package.json'], process.exit);
	gulp.watch([pkg.directories.lib+'/**/*.js',pkg.directories.test+'/**/*.js'], ['build-js']);
});

// Default Task
gulp.task('build-js',    ['jshint','nodeunit']);
gulp.task('default',     ['jshint']);
