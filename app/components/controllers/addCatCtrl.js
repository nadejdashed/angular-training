(function(module) {

    var addCatController = function ($scope,$http) {
      $scope.catImageUrl = 'http://cdn.syn-ch.com/src/139/61/34/1396134288710.jpeg';
      $scope.onSave = function() {

      }
    };

    module.controller("addCatController", addCatController);

}(angular.module("app")));
