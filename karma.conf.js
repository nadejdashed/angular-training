module.exports = function(config){
  config.set({

    basePath : "./",

    files : [
      "app/bower_components/angular/angular.js",
      "app/bower_components/angular-ui-router/release/angular-ui-router.js",
      "app/bower_components/angular-resource/angular-resource.js",
      "app/bower_components/angular-cookies/angular-cookies.js",
      "app/bower_components/angular-mocks/angular-mocks.js",
      "app/app.js",
      "app/cats/js/mocks.js",
      "app/cats/js/control/catControl.js",
      "app/cats/js/service/catService.js",
      "app/cats/js/directive/focus/focus.js",
      "app/cats/js/directive/save/save.js",
      "app/cats/js/directive/imagePreview/imagePreview.js",
      "app/cats/js/directive/voteButtons/voteButtons.js",
      "app/cats/js/test/*.js"
    ],

    autoWatch : true,

    frameworks: ["jasmine"],

    browsers : ["Chrome"],

    plugins : [
            "karma-chrome-launcher",
            "karma-firefox-launcher",
            "karma-jasmine",
            "karma-junit-reporter"
            ],

    junitReporter : {
      outputFile: "test_out/unit.xml",
      suite: "unit"
    }

  });
};
