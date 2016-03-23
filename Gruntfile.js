module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		jshint: {
			options: { // see https://github.com/jshint/jshint/blob/master/examples/.jshintrc
				browser: true,
				jquery: true,
				strict: true,
				curly: true
			},
			build: {
				files: {
					src: [
						'<%= pkg.directories.lib %>/*.js',
						'<%= pkg.directories.test %>/*.js'
					]
				}
			}
		},

		uglify: {
			options: {
				// mangle: false,
				// beautify: true,
				// compress: false,
				maxLineLen: 9000,
				sourceMap: '<%= pkg.config.develop %>'
			},
			build: {
				files: [{
					expand: true,
					cwd: '<%= pkg.directories.lib %>/',
					src: '*.js',
					dest: '<%= pkg.directories.build %>/'
				}]
			}
		},

		watch: {
			grunt: {
				files: ['Gruntfile.js']
			},
			js: {
				options: {livereload: true},
				files: ['<%= jshint.build.files.src %>'],
				tasks: ['build-js']
			},
			livereload: {
				options: {livereload: true},
				files: ['<%= pkg.directories.test %>/*']
			}
		}
	});

	// Load the plugins
	require('jit-grunt')(grunt);

	// Default task(s).
	grunt.registerTask('build-js',    ['jshint','uglify']);
	grunt.registerTask('default',     ['jshint','uglify']);
};
