(function(module) {

  var votesController = function ($scope, dataService) {

    $scope.votes = function(language, param) {
      language.likes += param;
      dataService.changeLanguage(language).then(function(data) {

      });
    };

  };

  module.controller("votesController", votesController);

}(angular.module("app")));
