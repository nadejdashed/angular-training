(function(module) {



    var addCatController = function ($scope,catService) {

        $scope.showCatImage= function()
        {
            $scope.newCat.canShow = true;
        }

        $scope.newCat = {};

        $scope.saveCat = function(cat)
        {
            catService.saveNewCat(cat);
        }

    };

    module.controller("addCatController", addCatController);

}(angular.module("app")));