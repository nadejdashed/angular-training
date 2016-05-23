"use strict";

// Declare app level module which depends on views, and components
angular.module("myApp", [
    "ui.router",
    "myApp.catControl",
    "myApp.catService",
    "myApp.focusDirective",
    "myApp.saveDirective",
    "myApp.imagePreviewDirective",
    "myApp.voteButtonsDirective"
])

.config(function($stateProvider, $urlRouterProvider, $locationProvider) {
    $stateProvider.state("cats", {
        url: "/cats",
        templateUrl: "cats/cats.html",
        controller: "CatControl"
    });
    $stateProvider.state("addCat", {
        url: "/cats/add",
        templateUrl: "cats/add.html",
        controller: "CatControl"
    });
    $stateProvider.state("viewCat", {
        url: "/cats/:id",
        templateUrl: "cats/view.html",
        controller: function($scope, $stateParams, catService) {
          $scope.cat = catService.get($stateParams.id)
        }
    });
    $stateProvider.state("about", {
        url: "/about",
        template: "<h2>About page</h2>"
    });
    $urlRouterProvider.otherwise("/cats");
});
