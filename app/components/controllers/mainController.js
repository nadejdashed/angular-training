(function(module) {
    "use strict";

    var mainController = function ($scope, $location, resourceService, permissionsService) {

      $scope.languagesArray = [];
      $scope.currentLanguage = {};

      // $scope.languagesArray = resourceService.getLanguages();
      // $scope.currentLanguage = $scope.languagesArray[0];

      resourceService.getLanguages().then(function(data) {
        $scope.languagesArray = data;
        $scope.currentLanguage = $scope.languagesArray[0];
      });

      $scope.editPermission = function(language) {
        return permissionsService.canEditPermission(language);
      };

      $scope.deleteLanguage = function(language) {
        resourceService.deleteLanguage(language).then(function() {
          console.log(language);
          var index = $scope.languagesArray.indexOf(language);
          $scope.languagesArray.splice(index, 1);
        });
      };

      $scope.editLanguageShow = function(language) {
        $location.path("editLanguage/" + language.id);
      };

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

      $scope.viewedLanguages = [];
      $scope.$watch('languagesArray', function(allLanguages) {
        for (var i = 0; i < allLanguages.length; i++ ) {
          if ($scope.viewedLanguages.indexOf(allLanguages[i].name) === -1 && allLanguages[i].viewed) {
            $scope.viewedLanguages.unshift(allLanguages[i].name);
          }
        }
      }, true );

    };

    module.controller("mainController", mainController);

}(angular.module("app")));
