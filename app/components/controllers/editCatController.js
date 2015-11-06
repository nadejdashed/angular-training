(function(module) {

    var editCatController = function ($scope, $stateParams, $state, catService, catData) {

        $scope.catToEdit = catData;

        $scope.cancelEdit = function(){
            $state.go('cats');
        };

        $scope.saveCat = function(){
            catService.saveCat($scope.catToEdit);
            $state.go('cats');
        };
    };

    module.controller("editCatController", editCatController);

}(angular.module("app")));