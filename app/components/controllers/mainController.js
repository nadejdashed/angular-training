(function(module) {
    "use strict";

    var mainController = function ($scope, $location, resourceService, permissionsService, $uibModal) {

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


      $scope.deleteLanguage = function (language) {

        var modalInstance = $uibModal.open({
          templateUrl: 'templates/modalDelete.html',
          controller: 'modalController',
          resolve: {
            item: function () {
              return language;
            }
          }
        });

        modalInstance.result.then(function (lang) {
          resourceService.deleteLanguage(lang).then(function() {
            var index = $scope.languagesArray.indexOf(lang);
            $scope.languagesArray.splice(index, 1);
          });
          console.log("Language is deleted");
        }, function () {
          console.log('Modal dismissed');
        });
      };

    };

    module.controller("mainController", mainController);

}(angular.module("app")));
