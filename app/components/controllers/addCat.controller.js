angular.module("app").controller("addCatController",
    function ($scope, $uibModalInstance, $state, catsService) {
        $scope.submit = function(cat) {
            catsService.addCatPromise(cat).then(function(cat) {
                $uibModalInstance.close(cat);
                //$state.go('listView.vote', {id : cat.id});
            });
        };

        $scope.cancel = function () {
            $uibModalInstance.dismiss('cancel');
        };
    }
);