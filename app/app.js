(function () {
    "use strict";
    angular.module("app", ['ngRoute', 'ngCookies', 'ui.bootstrap', 'ngResource']).config(function($routeProvider, $httpProvider) {

        $httpProvider.interceptors.push('authInterceptor');

        $routeProvider
            .when('/cats',
            {
                controller: 'mainController',
                templateUrl: 'templates/listOfCats.html',
                resolve : {
                    'cats': function(catFactory) {
                        return catFactory.getListOfCats();
                    }
                }
            })
            .when('/addCat', {
                controller: 'addController',
                templateUrl: 'templates/addCat.html'
            })
            .when('/editCat/:id', {
                controller: 'addController',
                templateUrl: 'templates/addCat.html'
            })
            .when('/catProfile/:id', {
                controller: 'catProfileController',
                templateUrl: 'templates/catProfile.html'
            })
            .when('/registration', {
/*                controller: 'userController',*/
                controller: 'loginController',
                templateUrl: 'templates/registration.html'
            })
            .when('/login', {
/*                controller: 'userController',*/
                controller: 'loginController',
                templateUrl: 'templates/login.html'
            })
            .when('/about', {
                template: '<h2>Cat Aplication v1.0</h2>'
            })
            .otherwise({
                template : ''
            })
    });
})();


/*
(function () {
    "use strict";
    angular.module("app", ['ngRoute']).config(function($routeProvider) {
        $routeProvider
            .when('/cats',
            {
                controller: 'mainController',
                templateUrl: 'templates/listOfCats.html'
            })
            .when('/addCat', {
                controller: 'addController',
                templateUrl: 'templates/addCat.html'
            })
            .when('/about', {
                template: '<h2>Cat Aplication v1.0</h2>'
            })
            .otherwise({
                template : '<h1>HELLO<h1>'
            })
    });
})();
*/
