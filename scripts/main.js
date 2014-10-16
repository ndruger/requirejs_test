requirejs.config({
  //By default load any module IDs from js/lib
//  baseUrl: './',
  //except, if the module ID starts with "app",
  //load it from the js/app directory. paths
  //config is relative to the baseUrl, and
  //never includes a ".js" extension since
  //the paths config could be for a directory.
  paths: {
    testlib: 'normallib',
    jquery: '//code.jquery.com/jquery-2.1.1.min'
  },
  shim: {
    'jquery': {
      exports: 'jquery'
    },
    'normallib': {
      exports: 'neko'
    },
    'require_base_lib': {
      exports: 'neko',
      deps: ['jquery']
    }
  }
});

require(["normallib", "require_base_lib", "jquery"], function(testlib, reqlib, $) {
  console.log(testlib, neko, $);
  //This function is called when scripts/helper/util.js is loaded.
  //If util.js calls define(), then this function is not fired until
  //util's dependencies have loaded, and the util argument will hold
  //the module value for "helper/util".
});
