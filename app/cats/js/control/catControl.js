"use strict";

angular.module("myApp.catControl", ["ngRoute"])

.config(["$routeProvider", function($routeProvider) {
  $routeProvider.when("/cats", {
    templateUrl: "cats/cats.html",
    controller: "CatControl"
  });
  $routeProvider.when("/cats/add", {
    templateUrl: "cats/add.html",
    controller: "CatControl"
  });
  $routeProvider.otherwise({
    redirectTo: "/cats"
  });
}])

.controller("CatControl", function($scope, $location, catService) {
  catService.get().then(function(cats) {
    $scope.cats = cats;
    $scope.cat = cats[0];
  });

  $scope.$watch("cats", function() {
    catService.save($scope.cats);
  }, true);

  $scope.selectCat = function(cat) {
    if ($scope.cat !== cat) {
      $scope.cat.wasSelected = true;
      $scope.cat = cat;
    }
  }

  $scope.findCat = function() {
    $scope.filterExpression = $scope.searchText;
  }

  $scope.newCat = {}

  $scope.add = function(newCat) {
    $scope.cats.push({
      name: newCat.name,
      src: newCat.url,
      votes: 0
    });
    $location.path("/cats");
  }

  $scope.reset = function() {
    $scope.newCat = {};
  }
});
