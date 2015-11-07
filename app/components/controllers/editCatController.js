(function(module) {



    var editCatController = function ($scope,catService, cat) {



        $scope.cat  = cat;

        $scope.saveCat = function(cat)
        {
            catService.editCat(cat);
        }

        $scope.deleteCat = function(cat)
        {
            catService.deleteCat(cat);
        }

    };

    module.controller("editCatController", editCatController);

}(angular.module("app")));