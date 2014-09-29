module.exports = function (grunt) {
    'use strict';
    var path = require('path');

    var appPath = 'app/';

    grunt.initConfig({
        watch: {
            debug: {
                files: [appPath + '**/*.js', appPath + '**/*.html', appPath + '**/*.css'],
                tasks: ['build']
            }
        },

        jshint: {
            all: [appPath + '**/*.js']
        },

        ngAnnotate: {
            app: {
                files: {
                    'build/app.js': ['app/**/*.js']
                }
            }
        },

        express: {
            app: {
                options: {
                    bases: [path.resolve('app')],
                    port: 8000,
                    server: path.resolve(__dirname, 'server.js')
                }
            }
        },

        copy: {
            main: {
                files: [
                    {expand: true, cwd: 'app/', src: ['*.html'], dest: 'build/'},
                    {expand: true, cwd: 'app/', src: ['*.css'], dest: 'build/'}
                ]
            }
        },

        parallel: {
            server: {
                options: {
                    grunt: true
                },
                tasks: ["server"]
            },
            watch: {
                options: {
                    grunt: true
                },
                tasks: ["watch:debug"]
            }
        }
    });

    grunt.loadNpmTasks('grunt-parallel');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-express');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-newer');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-ng-annotate');

    grunt.registerTask('default', [ 'build', "express:app", "parallel:server"]);
    grunt.registerTask('build', ['jshint', 'copy:main', 'ngAnnotate']);
    grunt.registerTask('server', ['watch:debug', 'express-keepalive:app']);
};