(function () {
    "use strict";
    var app = angular.module("app", ["ngResource", "ui.router"]);
    
    app.config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('home', {
                url: "/home",
                templateUrl: "app/templates/main.html"
            })
            .state('addCat', {
                url: "/cats",
                templateUrl: "app/templates/form.html"
            })
            .state('about', {
                url: "/about",
                template: "<h1>About</h1>"
            });
        $urlRouterProvider.otherwise('/home');
    });
})();
