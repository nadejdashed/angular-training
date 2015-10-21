(function () {
    "use strict";

    angular.module("reg", ["ngStorage", "ngCookies"]);

    angular.module("app", ["reg", "alertsModule", "ngResource", "ngRoute"])
      .config(['$routeProvider', '$httpProvider', function($routeProvider, $httpProvider) {
        $routeProvider.
            when('/', {templateUrl: 'templates/language-main.html',   controller: 'mainController'}).
            when('/add-language', {templateUrl: 'templates/add-language.html',   controller: 'addLanguageController'}).
            when('/editLanguage/:id', {templateUrl: 'templates/add-language.html',   controller: 'editLanguageController'}).
            when('/authentication', {templateUrl: 'templates/authentication.html',   controller: 'registerController'}).
            //when('/login', {templateUrl: 'templates/authentication.html',   controller: 'registerController'}).
            when('/about', {template: '<h1>My Faworite Languages site</h1>'}).
            otherwise({redirectTo: '/'});

        $httpProvider.interceptors.push('authInterceptor');

    }]).run(function($rootScope){});

})();
