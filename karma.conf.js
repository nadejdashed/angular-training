module.exports = function(config) {
    config.set({
        autoWatch: false,
        browsers: ['PhantomJS'],
        files: [
            'bower_components/angular/angular.js',
            'bower_components/angular-mocks/angular-mocks.js',
            'app/**/*.js',
            'specs/**/*.js'
        ],
        frameworks: ["jasmine"],
        reporters: ["dots", "progress", "beep"],
        plugins : [
            'karma-bigdots-reporter',
            'karma-beep-reporter',
            'karma-phantomjs-launcher',
            'karma-jasmine'
        ]
    });
};