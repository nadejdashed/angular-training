(function(module) {

  var editLanguageController = function ($scope, dataService, $routeParams, $location) {

    var id = $routeParams.id;

    dataService.getLanguage(id).then(function(data) {
       $scope.lang = data;
    });

    $scope.saveLanguage = function(language) {
      dataService.changeLanguage(language).then(function(data) {
        $location.path('/');
      });
    };

    $scope.cancel = function() {
      $location.path('/');
    };

  };

  module.controller("editLanguageController", editLanguageController);

}(angular.module("app")));
