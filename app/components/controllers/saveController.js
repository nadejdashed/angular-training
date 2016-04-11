(function(module) {

  var saveController = function($scope, cats) {
    $scope.urlCatList = '/';
    $scope.submit = function(newCat) {
       cats.save($scope.newCat);
    };
    $scope.goto = function(url) {
    	window.location = url;
    }
  }

  module.controller("saveController", saveController);

}(angular.module("app")));