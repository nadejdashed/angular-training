(function(module) {

    var mainController = function ($scope, $http, catCrudService, catCookiesService) {
      $scope.cats = catCrudService.getCats()

      $scope.selectCat =function(cat) {
        $scope.selectedCat = cat;
        cat.viewed = true;
      };
      $scope.text = "Cats?"; // TODO remove unnecessary code

      $scope.onSave = function() {

      }
      $scope.vote = function(cat) {
        catCookiesService.voteCat(cat)
      }
    };

    module.controller("mainController", mainController);

}(angular.module("app")));
