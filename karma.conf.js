module.exports = function(config) {
    config.set({
        autoWatch: false,
        browsers: ['PhantomJS'],
        files: [
            'bower_components/angular/angular.js',
            'bower_components/angular-mocks/angular-mocks.js',
            'bower_components/angular-route/angular-route.min.js',
            'bower_components/angular-sanitize/angular-sanitize.min.js',
            'bower_components/angular-emoji-filter-hd/dist/emoji.min.js',
            'bower_components/angular-socket-io/socket.min.js',
            'specs/mock.js',
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