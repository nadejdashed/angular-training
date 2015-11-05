(function(module) {

    var modalController = function ($scope) {
        $scope.items = items;

        $scope.ok = function () {
            $uibModalInstance.close();
        };

        $scope.cancel = function () {
            $uibModalInstance.dismiss('cancel');
        };
    };

    module.controller("modalController", modalController);

}(angular.module("app")));