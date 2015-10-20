(function () {
    "use strict";
    angular.module("app", ["ngCookies", "ui.router"])
        .config(function ($stateProvider, $urlRouterProvider) {

            $urlRouterProvider.otherwise("/");

            $stateProvider
                .state("mainPage", {
                    url: "/",
                    templateUrl: "templates/main.html",
                    controller: "mainController"
                })
                .state("addCat", {
                    url: "/addCat",
                    templateUrl: "templates/addCat.html",
                    controller: "addCatController",
                    resolve: {
                        getCats: function(catService){
                            return catService.getCats();
                        }
                    }
                })
                .state("authorization", {
                    url: "/authorization",
                    templateUrl: "templates/login.html",
                    controller: "isUserActiveController"
                })
                .state("authorization.signIn", {
                    url: "/signIn",
                    templateUrl: "templates/authorizationAndRegistration/authorizationForm.html",
                    controller: "signInController",
                    resolve: {
                        getUser: function(userService){
                            return userService.getUser();
                        }
                    }
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



