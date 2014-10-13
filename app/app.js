(function () {
    "use strict";
    angular.module("app", ["ngRoute"]);

    angular.module("app").config(function ($routeProvider) {
        $routeProvider.otherwise({ redirectTo: "/home" });

        $routeProvider.when('/home', {
            templateUrl: 'templates/phone/home.html',
            controller: 'HomeController'
        });
    });

})();
