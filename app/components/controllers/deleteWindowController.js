angular.module('app').controller('deleteWindowController', function ($scope, $modalInstance, instance) {

    $scope.name = instance.name;

    $scope.delete = function () {
        $modalInstance.close(instance);
    };

    $scope.cancel = function () {
        $modalInstance.dismiss('cancel');
    };
});