module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        watch: {
            options: {
                livereload: true
            },
            scripts: {
                files: [
                    'app/js/**/*.js',
                    'app/js/**/*.es6'
                ],
                tasks: [
                    'process'
                ]
            },
            css: {
                files: [
                    'app/sass/*.scss'
                ],
                tasks: [
                    'sass-compile'
                ]
            }
        },
        concat: {
            dist: {
                src: [
                    'app/js/**/*.js',
                    'app/js/**/*.es6'
                ],
                dest: 'dist/js/concat-es6.es6'
            }
        },
        uglify: {
            dist: {
                options: {
                    banner: '/*!\n * <%= pkg.name %> \n * v<%= pkg.version %> - ' +
                    '<%= grunt.template.today("yyyy-mm-dd") %> \n * Copyright (c) <%= pkg.author %>\n**/',
                    sourceMap: true,
                    sourceMapName: 'dist/js/built.min.js.map'
                },
                files: {
                    'dist/js/built.min.js': [
                        'dist/js/built.js'
                    ]
                }
            }
        },
        sass: {
            options: {
                sourcemap: 'auto',
                noCache: true,
                style: 'expanded'
            },
            dist: {
                files: {
                    'dist/css/style.css': [
                        'app/sass/style.scss'
                    ]
                }
            }
        },
        babel: {
            options: {
                sourceMap: true,
                presets: [ 'es2015' ]
            },
            dist: {
                files: {
                    'dist/js/built.js': 'dist/js/concat-es6.es6'
                }
            }
        }
    });
    grunt.loadNpmTasks('grunt-babel');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-newer');

    grunt.registerTask('process', [
        'newer:concat', 'babel', 'uglify'
    ]);
    grunt.registerTask('sass-compile', [
        'newer:sass'
    ]);
    grunt.registerTask('default', [
        'concat', 'babel', 'uglify', 'sass', 'watch'
    ]);
};