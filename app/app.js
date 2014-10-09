(function () {
    "use strict";
    angular.module("chat", []);

    angular.module("chat").config(function ($routeProvider) {
        $routeProvider.otherwise({ redirectTo: "/home" });

        $routeProvider.when('/home', {
            templateUrl: 'templates/phone/home.html',
            controller: 'HomeController'
        });
    });

})();
