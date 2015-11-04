//ModalInstanceCtrl

angular.module('app').controller('ModalInstanceCtrl', function ($scope, $uibModalInstance, itemToDelete, serverCommunication) {

    $scope.item = itemToDelete;
    //$scope.selected = {
    //    item: $scope.items[0]
    //};

    $scope.ok = function (id) {
        var deffered = serverCommunication.removeItemHttp(id);
        deffered.then(
            function(resp){
                console.log('remove id', id)
                $uibModalInstance.close();
            },
            function(reject){},
            function(progress){

            }
        );

    };

    $scope.cancel = function () {
        $uibModalInstance.dismiss('cancel');
    };
});
