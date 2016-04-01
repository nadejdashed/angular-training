'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ['$scope', 'CatService', function($scope, CatService) {

  CatService.getCats().then(function (data) {
    $scope.cats = data.data;
  });

  $scope.incr = function (cat) {
    cat.clicks++;
  };
  $scope.decr = function (cat) {
    cat.clicks--;
  };
  
  $scope.select = function (cat) {
    $scope.selected = cat;  
    cat.wasSelected = true;
  };

  $scope.doSearch = function () {
    $scope.searchSubmitted = $scope.searchText;
  }
}]);