(function(module) {

    var addNewCatController = function ($scope, catsService) {


        $scope.catForSaving = {};

        $scope.saveNewCat = function (newCat) {

            newCat.vote = 0;
            catsService.saveCat(newCat).then(function () {

                $scope.catForSaving = {};

            });
        }

        $scope.cancelEditing = function (newCat) {
            $scope.catForSaving = {};
        }
    }

    module.controller("addNewCatController", addNewCatController);

}(angular.module("app")));