//ModalInstanceCtrl

angular.module('app').controller('ModalInstanceCtrl', function ($scope, $uibModalInstance, itemToDelete, serverCommunication) {

    $scope.item = itemToDelete;
    //$scope.selected = {
    //    item: $scope.items[0]
    //};

    $scope.ok = function () {
        var id = $scope.item.id;
        console.log('in OK button id',id)
        /*
        var deffered = serverCommunication.removeItemHttp(id);
        deffered.then(
            function(resp){
                console.log('remove id', id , 'resp.data' , resp.data);

                //update list here

                //$scope.allCats = resp.data;

                //update list here END

                $uibModalInstance.close();
            },
            function(reject){},
            function(progress){

            }
        );
        */

    };

    $scope.cancel = function () {
        $uibModalInstance.dismiss('cancel');
    };
});
