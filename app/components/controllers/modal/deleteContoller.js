/**
 * Created by vv on 22.10.2015.
 */
(function(module) {

    var modalDeleteCtrl = function ($scope, $modalInstance, item) {
        $scope.item = item;

        $scope.delete = function () {
            $modalInstance.close();
        };

        $scope.cancel = function () {
            $modalInstance.dismiss('cancel');
        };

    };

    module.controller("modalDeleteCtrl", modalDeleteCtrl);

}(angular.module("app")));