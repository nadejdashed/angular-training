(function(module) {

    var deleteCatController = function ($scope, $modalInstance, cat) {
        $scope.cat = cat;
        $scope.ok = function () {
           $modalInstance.close(cat);
        };

        $scope.cancel = function () {
            $modalInstance.dismiss('cancel');
        };
    };
    module.controller("deleteCatController", deleteCatController);
}(angular.module("app")));
