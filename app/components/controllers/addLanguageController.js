(function(module) {
    "use strict";

    var addLanguageController = function ($scope, dataService, $location) {

      $scope.saveLanguage = function(lang) {
        dataService.addLanguage(lang).then(function(data) {
          $location.path('/');
        });
      };

      $scope.cancel = function() {
        $location.path('/');
      };

    };

    module.controller("addLanguageController", addLanguageController);

}(angular.module("app")));
