angular.module('app').controller('deleteModal', function ($scope, $modalInstance, item) {

    $scope.item = item;

    $scope.ok = function () {
        $modalInstance.close(item);
    };

    $scope.cancel = function () {
        $modalInstance.dismiss('cancel');
    };
});