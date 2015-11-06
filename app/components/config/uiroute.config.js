angular.module("app").config(function($stateProvider, $urlRouterProvider, $locationProvider) {

    $locationProvider.html5Mode(true);

    $urlRouterProvider.otherwise("/listView");

    $stateProvider.state('listView', {
        url: "/listView",
        templateUrl: "/templates/listCats.html",
        controller: "listCatsController"
    }).state("listView.vote", {
        url: "/vote/:id",
        templateUrl: "/templates/voteCat.html",
        controller: "voteCatController"
    }).state("addCat", {
        url: "/add",
        templateUrl: "/templates/addCat.html",
        controller: "addCatController"
    }).state("editCat", {
        url: "/edit/:id",
        templateUrl: "/templates/editCat.html",
        controller: "editCatController"
    });
});