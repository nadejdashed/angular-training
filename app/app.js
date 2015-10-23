(function () {
    "use strict";
    angular.module("app", ["ngCookies", "ui.router", "alertsModule", "ngResource", "ui.bootstrap", "ngMessages"])
        .config(function ($stateProvider, $urlRouterProvider, $httpProvider) {

            $httpProvider.interceptors.push('authInterceptorService');

            $urlRouterProvider.otherwise("/");

            $stateProvider
                .state("mainPage", {
                    url: "/",
                    templateUrl: "templates/main.html",
                    controller: "mainController",
                    resolve: {
                        'getCats': function(catService){
                            return catService.getCats();
                        }
                    }
                })
                .state("addCat", {
                    url: "/addCat",
                    templateUrl: "templates/addCat.html",
                    controller: "addCatController"
                })
                .state("authorization", {
                    url: "/authorization",
                    templateUrl: "templates/authorizationAndRegistration/login.html",
                    controller: function($scope, userService){
                        $scope.$watch(     //voteSpinner same watch -- need ask about move into service
                            userService.getActiveUser, //chekatsa function
                            function( activeUser ) {
                                $scope.activeUserLogin = activeUser && activeUser.login;
                            },
                            true
                        );
                    }
                })
                .state("authorization.signIn", {
                    url: "/signIn",
                    templateUrl: "templates/authorizationAndRegistration/authorizationForm.html",
                    controller: "signInController"
                    //resolve: {
                    //    getUser: function(userService){
                    //        return userService.getUser();
                    //    }
                 //   }
                })
                .state("authorization.registration", {
                    url: "/registration",
                    templateUrl: "templates/authorizationAndRegistration/registrationForm.html",
                    controller: "registrationController"
                })
                .state("editCat", {
                    url: "/edit/:catId",
                    templateUrl: "templates/editCat.html",
                    resolve: {
                        getCatById: function(catService, $stateParams){
                            return catService.getCatById($stateParams.catId);
                        }
                    },
                    controller: "editCatController"
                });
        });
})();



