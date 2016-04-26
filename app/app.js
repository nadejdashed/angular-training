(function () {
    "use strict";
    angular.module("app", ['ngResource', 'ui.router'])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
    .state('cats', {
      url: "/",
      templateUrl: "catsTemplate.html"
    }).state('catslist', {
      url: "/cats",
      templateUrl: "catsTemplate.html"
    }).state('home', {
      url: "/cats",
      templateUrl: "catsTemplate.html"
    }).state('newCat', {
      url: "/newCat",
      templateUrl: "newCatTemplate.html"
    }).state('about', {
      url: "/about",
      template: "<p>ABOUT SPA CAT APPLICATION</p>"
    })
    ;
    $urlRouterProvider.otherwise('/');
  });
})();
