(function(module) {

    var mainController = function ($scope, dataService, $location) {

      $scope.languagesArray = [];
      $scope.currentLanguage = {};

      dataService.getLanguages().then(function(data) {
        $scope.languagesArray = data;
        $scope.currentLanguage = $scope.languagesArray[0];
      });

      $scope.deleteLanguage = function(language) {
        dataService.deleteLanguage(language).then(function(data) {
          var index = $scope.languagesArray.indexOf(language);
          $scope.languagesArray.splice(index, 1);
        });
      };

      $scope.editLanguageShow = function(language) {
        $location.path("editLanguage/" + language.id);
      };

      //$scope.getUser = $cookies.getObject('UserLogin').login;

      $scope.selectCurrentLanguage = function(currentLanguage) {
        $scope.currentLanguage = currentLanguage;
        $scope.currentLanguage.viewed = true;
      };

      $scope.counter = function(language) {
        language.clicks ++;
      };

      $scope.searchByName = function(query) {
        $scope.query = query;
      };

    };

    module.controller("mainController", mainController);

}(angular.module("app")));
