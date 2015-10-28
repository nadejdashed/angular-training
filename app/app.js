(function () {
    "use strict";
    angular.module("app", ['ngRoute', 'ngResource', 'ui.bootstrap']).config(function ($locationProvider, $routeProvider, $httpProvider) {
        $locationProvider.html5Mode(true);
        $httpProvider.interceptors.push('authorizationInterceptor');

        $routeProvider.when('/', {
            controller: 'mainController',
            templateUrl: '/templates/main.html'
        }).when('/addDog', {
            controller: 'addDogController',
            templateUrl: '/templates/addDog.html'
        }).when('/dog/:id', {
            controller: 'dogPageCtrl',
            templateUrl: '/templates/addDog.html',
            resolve: {
                allDogs: function (dogService) {
                    return dogService.getDogs();
                }
            }
        }).when('/auth', {
            controller: 'loginCtrl',
            templateUrl: 'templates/login.html'
        }).when('/registration', {
            controller: 'loginCtrl',
            templateUrl: 'templates/registration.html'
        }).when('/about', {
            template: '<h1>About page</h1>'
        }).otherwise({redirectTo: '/'});
    });
})();
