(function(module) {
    "use strict";

    var modalController = function ($scope, $modalInstance, item) {
      $scope.lang = item;

      $scope.delete = function () {
        $modalInstance.close(item);
      };

      $scope.cancel = function () {
        $modalInstance.dismiss('cancel');
      };

    };

    module.controller("modalController", modalController);

}(angular.module("app")));
