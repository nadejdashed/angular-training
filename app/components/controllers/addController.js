(function (module) {

  var addController = function ($scope, CatService) {
    $scope.newCat = {
      id: -1,
      name: '',
      url: '',
      vote: 0
    };

    $scope.testVote = 0;

    $scope.submitAdd = function () {
      CatService.saveCat($scope.newCat);
    }
  };

  module.controller("addController", addController);

}(angular.module("app")));
