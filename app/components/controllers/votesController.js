(function(module) {
  "use strict";

  var votesController = function ($scope, resourceService) {

    $scope.votes = function(language, param) {
      language.likes += param;
      resourceService.changeLanguageLikes(language).then(function(data) {

      });
    };

  };

  module.controller("votesController", votesController);

}(angular.module("app")));
