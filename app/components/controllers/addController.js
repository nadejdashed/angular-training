(function (module) {

  var addController = function ($scope, CatSharedObject) {
    $scope.newCat = {
      id: -1,
      name: '',
      url: '',
      vote: 0
    };

    $scope.testVote = 0;

    $scope.submitAdd = function () {
      CatSharedObject.saveCat($scope.newCat);
    }
  };

  module.controller("addController", addController);

}(angular.module("app")));
