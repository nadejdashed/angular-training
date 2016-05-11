module.exports = function(config) {
  config.set({
    basePath: '..',
    frameworks: ['jasmine'],
    files: [
      'app/lib/jquery.min.js',
      'app/lib/angular/angular.js',
      'app/lib/angular/angular-route.js',
      'app/lib/angular/angular-resource.js',
      'app/lib/angular/angular-sanitize.js',
      'app/lib/angular-mocks/angular-mocks.js',
      'app/js/app.js',
      'app/js/**/*.js',
      'app/templates/**/*.html',
      'test/unit/**/*.js'
    ],
    exclude: [
      'app/js/mock.js'
    ],
    browsers: ['PhantomJS'],
    logLevel: config.LOG_INFO,
    plugins: [
      'karma-jasmine',
      'karma-phantomjs-launcher',
      'karma-ng-html2js-preprocessor'
    ],
    preprocessors: {
      'app/templates/**/*.html': ['ng-html2js']
    },
    ngHtml2JsPreprocessor: {
      moduleName: 'templates',
      stripPrefix: 'app/',
      prependPrefix: '/'
    }
  });
};