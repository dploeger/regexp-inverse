'use strict';

module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({
        eslint: {
            gruntfile: ['Gruntfile.js'],
            lib: ['lib/**/*.js'],
            test: ['test/**/*_test.js'],
            options: {
                configFile: '.eslintrc'
            }
        },
        nodeunit: {
            files: ['test/**/*_test.js'],
        }
    });

    // These plugins provide necessary tasks.
    grunt.loadNpmTasks('grunt-contrib-nodeunit');
    grunt.loadNpmTasks('gruntify-eslint');

    // Default task.
    grunt.registerTask('default', ['eslint', 'nodeunit']);

};
