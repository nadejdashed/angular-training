angular.module("app").controller("editCatController",
    function($scope, $uibModalInstance, catsService, cat) {
        $scope.cat=cat;

        $scope.cancel = function () {
            $uibModalInstance.dismiss('cancel');
        };

        $scope.submit = function (cat) {
            catsService.updateCatPromise(cat).then(function(cat) {
                $uibModalInstance.close();
            });
        };
    }
);