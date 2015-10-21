(function(module) {

    var editCatController = function (catService, $scope, getCatById) {
        $scope.cat = getCatById;

        $scope.saveCat = function () {
            catService.editCat($scope.cat);
        };
    };
    module.controller("editCatController", editCatController);
}(angular.module("app")));