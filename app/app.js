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
              // TODO add controllers in views. It will help to use one template to few controllers
            })
            .state('about', {
                url: "/about",
                template: "<h1>About</h1>"
            });
        $urlRouterProvider.otherwise('/home');
    });
})();
