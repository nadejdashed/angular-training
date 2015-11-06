(function(module) {

    var editCatController = function ($scope, $stateParams, $state, catService, catData) {

        $scope.catToEdit = catData;

        $scope.cancelEdit = function(){
            $state.go('cats');
            throw "Edit was cancelled";
        };

        $scope.saveCat = function(){
            catService.saveCat($scope.catToEdit);
            $state.go('cats');
            throw "Cat was edited";
        };
    };

    module.controller("editCatController", editCatController);

}(angular.module("app")));