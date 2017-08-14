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
            '<%= pkg.directories.lib %>/**/*.js',
            '<%= pkg.directories.test %>/**/*.js'
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

    nodeunit: {
      all: ['<%= pkg.directories.test %>/*.js']
    },

    watch: {
      grunt: {
        files: ['Gruntfile.js']
      },
      js: {
        options: {livereload: true},
        files: ['<%= jshint.build.files.src %>','<%= pkg.directories.test %>/*.js'],
        tasks: ['build-js']
      },
      livereload: {
        options: {livereload: true},
        files: ['<%= pkg.directories.test %>/*.html']
      }
    }
  });

  // Load the plugins
  require('jit-grunt')(grunt);

  // Default task(s).
  grunt.registerTask('build-js',    ['jshint','uglify','nodeunit']);
  grunt.registerTask('default',     ['jshint','uglify']);
};
