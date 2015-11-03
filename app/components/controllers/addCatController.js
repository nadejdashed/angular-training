(function(module) {



    var addCatController = function ($scope) {

        $scope.showCatImage= function()
        {
            $scope.newCat.canShow = true;
        }

        $scope.newCat = {};

    };

    module.controller("addCatController", addCatController);

}(angular.module("app")));