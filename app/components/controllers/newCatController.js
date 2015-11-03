(function(module) {

    var newCatController = function ($scope, $state) {

        $scope.newCat = {};

        $scope.cancel = function(){
            $state.go('cats');
        };

        $scope.addNewCat = function(){
            $scope.newCat.votes = 0;
            $scope.newCat.clickNum = 0;
            $scope.newCat.viewed = false;
            $scope.data.cats.push($scope.newCat);
            $state.go('cats');
        };
    };

    module.controller("newCatController", newCatController);

}(angular.module("app")));