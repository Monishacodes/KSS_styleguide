module.exports = function (grunt) {

    //const mozjpeg = require('imagemin-mozjpeg');
    grunt.initConfig({        
        sass: {
            options: {
                sourcemap: false,
                precision: 8,
                lineNumbers: true
            },
            dev: {
                files: [{
                    expand: 'expanded',
                    check: true,
                    update: true,
                    cwd: './sass',
                    src: ['*.scss'],
                    dest: './dist/css',
                    ext: '.css'
                }]
            }
        },      
        watch: {
            src: {
                files: ['**/*.scss'],
                tasks: ['sass:dev']
            },
            options: {
                livereload: true,
            },
           
        },       
    });
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');	   

   
};