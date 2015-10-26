module.exports = function(config) {
    config.set({
        autoWatch: true,
        browsers: ['PhantomJS2'],
        files: [
            'bower_components/angular/angular.js',
            'bower_components/angular-mocks/angular-mocks.js',
            'bower_components/angular-ui-router/release/angular-ui-router.js',
            'bower_components/angular-resource/angular-resource.js',
            'bower_components/angular-cookies/angular-cookies.min.js',
            'bower_components/angular-messages/angular-messages.min.js',
            'bower_components/angular-bootstrap/ui-bootstrap-tpls.js',
            'app/**/*.module.js',
            'app/app.js',
            'app/**/*.js',
            'specs/components/**/*.js'
        ],
        exclude: [
            'app/**/*.mock.js'
        ],
        frameworks: ["jasmine"],
        reporters: ["progress"],
        plugins : [
            'karma-phantomjs2-launcher',
            'karma-jasmine'
        ],
        logLevel: config.LOG_INFO
    });
};