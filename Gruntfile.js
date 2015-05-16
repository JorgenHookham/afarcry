module.exports = function (grunt) {
    grunt.initConfig({
        imagemin: {
            all: {
                cwd: 'images/',
                dest: 'images/',
                expand: true,
                src: ['**/*.{jpg,jpeg,png}']
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-imagemin');
};
