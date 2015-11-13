(function(module) {

    var addNewCatController = function ($scope, catsService, $state) {


        $scope.catForSaving = {};

        $scope.saveNewCat = function (newCat) {

            if ($scope.addForm.$valid) {
                newCat.vote = 0;
                catsService.saveCat(newCat).then(function () {

                    $scope.catForSaving = {};
                    $state.go('cats');

                });
            }
        }

        $scope.cancelEditing = function (newCat) {
            $scope.catForSaving = {};
        }
    }

    module.controller("addNewCatController", addNewCatController);

}(angular.module("app")));