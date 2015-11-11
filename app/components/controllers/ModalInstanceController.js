//ModalInstanceCtrl

angular.module('app').controller('ModalInstanceCtrl', function ($scope, $uibModalInstance, itemCurrent, currentAction) {
    // $currentActionProvider override itself depending on what btn pressed( Del/Add )

    $scope.item = itemCurrent;


    $scope.okSave = function (item) {
        console.log('in currentAction button id',item)
            //debugger;
        currentAction(item).then(
            function(){
                $uibModalInstance.close()
            },
            function (){
                console.log('error');
            });
    };

    $scope.okEdit = function () {
        console.log('in currentAction button id',itemToDelete , ' $scope.item', $scope.item)
        //debugger;
        currentAction(itemCurrent).then(
            function(){
                $uibModalInstance.close()
            },
            function (){
                console.log('error');
            });
    };

    $scope.okDelete = function () {
        console.log('in currentAction button id',itemToDelete , ' $scope.item', $scope.item)
        //debugger;
        currentAction(itemCurrent).then(
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
