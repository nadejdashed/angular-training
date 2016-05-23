"use strict";

angular.module("myApp.catControl", [])

.controller("catControl", function($scope, $state, catService) {
  catService.getAll().then(function(cats) {
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
      id: "_" + Math.random().toString(36).substr(2, 9),
      name: newCat.name,
      src: newCat.url,
      votes: 0
    });
    $state.go("cats");
  }

  $scope.reset = function() {
    $scope.newCat = {};
  }
});
