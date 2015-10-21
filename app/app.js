(function () {
    "use strict";
    angular.module("app", ['ui.router']).config(function($stateProvider, $urlRouterProvider, $httpProvider){
        $urlRouterProvider.otherwise("/");

        $stateProvider.state('home',{
            url: "/",
            templateUrl: "templates/main.html",
            controller: 'mainController',
            resolve: {
                footballers: function(footballerService){
                    return footballerService.getData();
                }
            }
        })
            .state('addFootballer', {
                url: "/addFootballer",
                templateUrl: "templates/addFootballer.html",
                controller: 'addController'
            })
            .state('editFootballer', {
                url: "/edit/:id",
                templateUrl: "templates/addFootballer.html",
                controller: 'editController',
                resolve: {
                    footballer: function (footballerService, $stateParams) {
                        return footballerService.getDataById($stateParams.id);
                    }
                }
            })
            .state('author', {
                url: "/author",
                template: "<b>Author:</b> <i>Yuliya Prach</i>"
            })
            .state('register',{
                url: "/register",
                templateUrl: "templates/register.html",
                controller: "userController"
            })
            .state('login', {
                url: "/login",
                templateUrl: "templates/login.html",
                controller: "userController"
            })
        $httpProvider.interceptors.push('authInterceptor');
    });

})();
