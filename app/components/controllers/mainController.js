(function (module) {

  var mainController = function ($scope, CatService) {

    $scope.cats = CatService.getCats();

    $scope.selectCat = function (cat) {
      $scope.cat = cat;
    };

  };

  module.controller("mainController", mainController);

}(angular.module("app")));