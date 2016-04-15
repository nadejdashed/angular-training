(function (module) {

  var mainController = function ($scope, CatSharedObject) {

    $scope.cats = CatSharedObject.getCats();

    $scope.selectCat = function (cat) {
      $scope.cat = cat;
    };

    $scope.deleteCat = function (cat) {
      $scope.cats = CatSharedObject.deleteCat(cat);
    }

  };

  module.controller("mainController", mainController);

}(angular.module("app")));