(function(module) {

    var addLanguageController = function ($scope, dataService) {
      $scope.languagesArray = [];
      $scope.currentLanguage = {};//$scope.catArray[0];
      dataService.getLanguages().then(function(data) {
        $scope.languagesArray = data;
      });

      $scope.saveLanguage = function(lang) {
        dataService.addLanguage(lang).then(function(data) {
          window.location.href = "/";
        });
      };

      $scope.addImg = function(addLangUrl) {
        $scope.langUrl = addLangUrl;
      };

      $scope.redirectHome = function() {
        window.location.href = "/";
      };

    };

    module.controller("addLanguageController", addLanguageController);

}(angular.module("app")));
