(function(module) {

    var editCatController = function ($scope, $stateParams, $state, catService) {

        catService.getCat($stateParams.id).then(function(response){
            $scope.catToEdit = response;
        });

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