module.exports = function(grunt) {

  grunt.initConfig({
    requirejs: {
      compile: {
        options: {
          name: "main",
          baseUrl: "scripts",
          mainConfigFile: "scripts/main.js",
          out: "main.min.js",
          optimize: "none"
        }      
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-requirejs');
};

