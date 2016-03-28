'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ['$scope', function($scope) {
  
  $scope.cats = [
    {
      name: 'Senior',
      image: 'img/grooming-needs-senior-cat.jpg',
      clicks: 0,
      wasSelected: false
    },
    {
      name: 'Black',
      image: 'img/black.jpg',
      clicks: 0,
      wasSelected: false
    },
    {
      name: 'Bengal',
      image: 'img/bengal.jpg',
      clicks: 0,
      wasSelected: false
    },
    {
      name: 'Flash',
      image: 'img/flash.jpg',
      clicks: 0,
      wasSelected: false
    },
    {
      name: 'Skull',
      image: 'img/skull.jpg',
      clicks: 0,
      wasSelected: false
    },
    {
      name: 'Bread',
      image: 'img/breading.jpg',
      clicks: 0,
      wasSelected: false
    }
  ];

  //$scope.clicks = 0;

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