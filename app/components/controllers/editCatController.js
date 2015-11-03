(function(module) {

    var editCatController = function ($scope,  $state) {

        var original = angular.copy($scope.selectedCat);
        $scope.catToEdit = $scope.selectedCat;

        $scope.cancelEdit = function(){
            angular.extend($scope.catToEdit, original);
            $state.go('cats');
        };

        $scope.saveCat = function(){
            $state.go('cats');
        };
    };

    module.controller("editCatController", editCatController);

}(angular.module("app")));