module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		develop: false,
		dirs: {
			source:   'src/',
			build:    'build/',
			test:     'test/'
		},

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
						'<%= dirs.source %>*.js',
						'<%= dirs.test %>*.js'
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
				sourceMap: '<%= develop %>'
			},
			build: {
				files: [{
					expand: true,
					cwd: '<%= dirs.source %>',
					src: '*.js',
					dest: '<%= dirs.build %>'
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
				files: ['<%= dirs.template %>*.html','<%= dirs.template %>images/*']
			}
		}
	});

	// Load the plugins
	require('jit-grunt')(grunt);

	// Default task(s).
	grunt.registerTask('build-js',    ['jshint','uglify']);
	grunt.registerTask('default',     ['jshint','uglify']);
};
