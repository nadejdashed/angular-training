//ModalInstanceCtrl

angular.module('app').controller('ModalInstanceCtrl', function ($scope, $uibModalInstance, itemToDelete, currentAction) {
    // $currentActionProvider override itself depending on what btn pressed( Del/Add )

    $scope.item = itemToDelete;


    $scope.ok = function () {
        console.log('in currentAction button id',$scope.item.id)
            //debugger;
        currentAction().then(
            function(){
                $uibModalInstance.close()
            },
            function (){
                console.log('error');
            });
    };

    $scope.cancel = function () {
        $uibModalInstance.dismiss('cancel');
    };

});
