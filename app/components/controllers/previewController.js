(function(module) {

    var previewController = function ($scope, $stateParams, cat, $state, catsService) {

        $scope.currentCat = cat;

        $scope.$watch(catsService.getValid, function (newValue) {
            if (newValue === false) {
                catsService.getCatById($scope.currentCat.id).then(function (data) {
                    $scope.currentCat = data;
                });
            }
        });

        $scope.deleteCat = function(catForDeleting) {

            catsService.deleteCat(cat).then(function () {

                $state.go('cats');
            });
        }

        $scope.editCat = function(catForEditing) {

            $state.go('cats.preview.edit', {id: catForEditing.id});
        }
    }

    module.controller("previewController", previewController);

}(angular.module("app")));