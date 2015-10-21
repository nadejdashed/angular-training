(function(module) {
    "use strict";

    var addLanguageController = function ($scope, resourceService, $location) {

      $scope.saveLanguage = function(lang) {
        resourceService.addLanguage(lang).then(function() {
          $location.path('/');
        });
      };

      $scope.cancel = function() {
        $location.path('/');
      };

    };

    module.controller("addLanguageController", addLanguageController);

}(angular.module("app")));
