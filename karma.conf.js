module.exports = function(config) {
    config.set({
        autoWatch: true,
        browsers: ['Safari'],
        files: [
            'bower_components/angular/angular.js',
            'bower_components/angular-mocks/angular-mocks.js',
            'bower_components/angular-ui-router/release/angular-ui-router.js',
            'bower_components/angular-resource/angular-resource.js',
            'bower_components/angular-sanitize/angular-sanitize.min.js',
            'bower_components/angular-route/angular-route.js',
            'bower_components/angular-bootstrap/ui-bootstrap.js',
            'bower_components/angular-messages/angular-messages.js',
            'app/**/*.module.js',
            'app/app.js',
            'app/**/*.js',
            'specs/**/*.js'
        ],
        frameworks: ["jasmine"],
        reporters: ["progress"],
        plugins : [
            'karma-safari-launcher',
            'karma-jasmine'
        ],
        logLevel: config.LOG_DEBUG
    });
};