(function(module) {

    var addCatController = function ($scope, catService) {

        $scope.saveCat = function()
        {
            console.log(111);
            catService.saveCat($scope.catName, $scope.catUrl);
        };


    };
    module.controller("addCatController", addCatController);
}(angular.module("app")));