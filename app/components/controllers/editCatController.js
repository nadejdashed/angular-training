(function(module) {

    var editCatController = function ($stateParams, catService, $scope, getCatById) {
        var id = $stateParams.catId;
        $scope.cat = getCatById;

        $scope.saveCat = function () {
            catService.deleteCat(id);
            catService.pushCats($scope.cat);
        };
    };
    module.controller("editCatController", editCatController);
}(angular.module("app")));