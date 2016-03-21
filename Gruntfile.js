module.exports = function (grunt) {
    'use strict';
    
	require("load-grunt-tasks")(grunt);

    grunt.initConfig({
		connect: {
			server: {
				options: { 
					base: '.',
					port: 9999,
					hostname: 'localhost',
					directory : '.',
					open: true
				}
			}
		},

        watch: {
			files: ['./src/**/*.js'],
			options: {
				livereload: true
			}
		}
    });

    grunt.registerTask("default", ["connect", "watch"]);
};