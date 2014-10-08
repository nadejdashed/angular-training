module.exports = function (grunt) {
    'use strict';
    var path = require('path');

    var appPath = 'app/';

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        watch: {
            debug: {
                files: [appPath + '**/*.js', appPath + '**/*.html', appPath + '**/*.css'],
                tasks: ['build']
            }
        },

        concat: {
            app: {
                options: {
                    sourceMap: true,
                    sourceMapName: "build/sourcemap.map",
                    sourceMapStyle: "link"
                },
                src: ['app/**/*.js'],
                dest: 'build/<%= pkg.name %>.js'
            },
            appAndTpl: {
                src: ['build/<%= pkg.name %>.js', 'build/templates.js'],
                dest: 'build/<%= pkg.name %>.js'
            }
        },

        jshint: {
            all: [appPath + '**/*.js']
        },

        ngAnnotate: {
            app: {
                files: {
                    'build/<%= pkg.name %>.js': ['build/<%= pkg.name %>.js']
                }
            }
        },

        ngtemplates: {
            app: {
                cwd: 'app',
                src: '**/*.html',
                dest: 'build/templates.js'
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
                    {src: ['app/index.jx'], dest: 'build/index.html'},
                    {expand: true, cwd: 'app/', src: ['*.css'], dest: 'build/'}
                ]
            }
        },

        uglify: {
            release: {
                files: {
                    'build/<%= pkg.name %>.<%= pkg.version %>.min.js': ['build/<%= pkg.name %>.js']
                }
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
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-angular-templates');
    grunt.loadNpmTasks('grunt-contrib-concat-sourcemaps');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('develop', [ 'build', "express:app", "parallel:server"]);
    grunt.registerTask('build', [
        'jshint', 'copy:main', 'ngtemplates', 'concat:app',
        'ngAnnotate', 'concat:appAndTpl'
    ]);
    grunt.registerTask('release', ['build', 'uglify:release']);
    grunt.registerTask('server', ['watch:debug', 'express-keepalive:app']);
};