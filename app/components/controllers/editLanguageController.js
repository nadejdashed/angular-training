(function(module) {
  "use strict";

  var editLanguageController = function ($scope, resourceService, $routeParams, $location) {

    var id = $routeParams.id;

    resourceService.getLanguage(id).then(function(data) {
       $scope.lang = data;
    });

    $scope.saveLanguage = function(language) {
      resourceService.changeLanguage($scope.lang).then(function() {
        $location.path('/');
      });
    };

    $scope.cancel = function() {
      $location.path('/');
    };

  };

  module.controller("editLanguageController", editLanguageController);

}(angular.module("app")));
