(function(module) {

    var editController = function ($scope, catsService, editedCat, $state) {

        $scope.selectedCat = editedCat;

        $scope.saveChanges = function (cat) {

            if ($scope.editForm.$valid) {

                catsService.updateCat(cat).then(function (data) {
                    $state.go('cats.preview', {id: cat.id});
                });
            }
        }

        $scope.cancel = function (cat) {

            $state.go('cats.preview', {id: cat.id});
        }
    }

    module.controller("editController", editController);

}(angular.module("app")));