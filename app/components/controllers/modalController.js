//ModalInstanceCtrl

angular.module('app').controller('ModalInstanceCtrl', function ($scope, $uibModalInstance, itemToDelete) {

    $scope.item = itemToDelete;
    //$scope.selected = {
    //    item: $scope.items[0]
    //};

    $scope.ok = function () {
        $uibModalInstance.close();
    };

    $scope.cancel = function () {
        $uibModalInstance.dismiss('cancel');
    };
});
