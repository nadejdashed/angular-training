//ModalInstanceCtrl

angular.module('app').controller('ModalInstanceCtrl', function ($scope, $uibModalInstance, itemToDelete, serverCommunication) {

    $scope.item = itemToDelete;
    //$scope.selected = {
    //    item: $scope.items[0]
    //};

    $scope.ok = function () {
        $scope.item.id;
        console.log('in OK button id',$scope.item.id)
        /*
        var deffered = serverCommunication.removeItemHttp(id);
        deffered.then(
            function(resp){
                console.log('remove id', id , 'resp.data' , resp.data);

                //update list here

                //$scope.allCats = resp.data;

                //update list here END


            },
            function(reject){},
            function(progress){

            }
        );
        */
        $uibModalInstance.close();
    };

    $scope.cancel = function () {
        $uibModalInstance.dismiss('cancel');
    };
});
