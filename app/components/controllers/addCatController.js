(function(module) {
    var catController = function ($scope, catService) {
        $scope.clearForm = function () {
            $scope.cat = {name:"", url:""};
        }

        $scope.clearForm();

        $scope.saveCat = function (cat) {
            catService.addCat(cat);
            $scope.clearForm();
        }
    };
    module.controller("addCatController", catController);
}(angular.module("app")));