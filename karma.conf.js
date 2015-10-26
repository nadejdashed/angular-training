module.exports = function(config) {
    config.set({
        autoWatch: true,
        browsers: ['Chrome'],
        files: [
            'bower_components/angular/angular.js',
            'bower_components/angular-mocks/angular-mocks.js',
            'bower_components/angular-ui-router/release/angular-ui-router.js',
            'bower_components/angular-resource/angular-resource.js',
            'bower_components/angular-sanitize/angular-sanitize.min.js',
            'bower_components/angular-bootstrap/ui-bootstrap-tpls.min.js',
            'bower_components/angular-messages/angular-messages.min.js',
            'bower_components/angular-validation-match/src/angular-validation-match.js',
            'bower_components/angular-cookies/angular-cookies.min.js',
            'app/**/*.module.js',
            'app/app.js',
            'app/**/*.js',
            'specs/**/*.js'
        ],
        frameworks: ["jasmine"],
        reporters: ["progress"],
        plugins : [
            //'karma-beep-reporter',
            'karma-chrome-launcher',
            'karma-jasmine'
        ],
        logLevel: config.LOG_INFO
    });
};