(function () {
  "use strict";
  var appModule = angular.module("app", ['ngRoute', 'ngResource']);

  // configure our routes
  appModule.config(function ($routeProvider) {
    $routeProvider

    // route for the home page
      .when('/main', {
        templateUrl: 'templates/main.html',
        controller: 'mainController'
      })

      // route for the add page
      .when('/add', {
        templateUrl: 'templates/addForm.html',
        controller: 'addController'
      });
  });

})();