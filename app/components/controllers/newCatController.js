(function(module) {

    var newCatController = function ($scope, $state, catService) {

        $scope.newCat = {};

        $scope.cancel = function(){
            $state.go('cats');
        };

        $scope.addNewCat = function(){
            $scope.newCat.vote = 0;
            $scope.newCat.clickNum = 0;
            catService.addNewCat($scope.newCat);
            $scope.$emit("catListChanged");
            $state.go('cats');
        };
    };

    module.controller("newCatController", newCatController);

}(angular.module("app")));