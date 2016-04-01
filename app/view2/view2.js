'use strict';

angular.module('myApp.view2', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view2', {
    templateUrl: 'view2/view2.html',
    controller: 'View2Ctrl'
  });
}])

.controller('View2Ctrl', ['$scope', 'CatService', function($scope, CatService) {
  $scope.newCat = {
    name: 'Default Cat',
    image: 'http://localhost:8000/app/img/bengal.jpg',
    clicks: 0,
    wasSelected: false
  };

  $scope.addNew = function (newCat) {
    CatService.save(newCat);
  }
}]);