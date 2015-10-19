(function(module) {

    var mainController = function ($scope, dataService, $cookies) {

      $scope.languagesArray = [];
      $scope.currentLanguage = {};

      dataService.getLanguages().then(function(data) {
        $scope.languagesArray = data;
        $scope.currentLanguage = $scope.languagesArray[0];
        for (var i = 0; i < $scope.languagesArray.length; i++) {
          $scope.languagesArray[i].selected = false;
          $scope.languagesArray[i].editShow = false;
          $scope.languagesArray[i].viewed = false;
        }
        $scope.languagesArray[0].selected = true;

      });

      $scope.deleteLanguage = function(language) {
        dataService.deleteLanguage(language).then(function(data) {
          var index = $scope.languagesArray.indexOf(language);
          $scope.languagesArray.splice(index, 1);
        });

      };

      $scope.editLanguageShow = function(language) {
        for (var i = 0; i < $scope.languagesArray.length; i++) {
          $scope.languagesArray[i].editShow = false;
        }
        language.editShow = true;
      };


      $scope.getUser = $cookies.getObject('UserLogin').login;


      $scope.selectCurrentLanguage = function(currentLanguage) {
        $scope.currentLanguage = currentLanguage;
        $scope.currentLanguage.viewed = true;
        for (var i = 0; i < $scope.languagesArray.length; i++) {
          $scope.languagesArray[i].selected = false;
        }
        currentLanguage.selected = true;
        //dataService.getLanguage($scope.currentLanguage).then(function(data) {
          //console.log(data);
        //});
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
