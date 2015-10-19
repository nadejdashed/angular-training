(function(module) {

  var votesController = function ($scope, dataService, $cookies) {
    
    $scope.votes = function(language, param) {
      if (param === 1) {
        language.likes ++;

        dataService.changeLanguage(language).then(function(data) {
          console.log(data);
        });
      } else if (param === -1) {
        language.likes --;

        dataService.changeLanguage(language).then(function(data) {
          console.log(data);
        });
      }

    };

  };

  module.controller("votesController", votesController);

}(angular.module("app")));
