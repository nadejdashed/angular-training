(function(module) {
    var catController = function ($scope, catService, $stateParams, $window) {
        
        /*var catId = $stateParams.id;
        if(catId){
            var editCat = catService.getCat(catId).then(function (data) {
                $scope.cat = data;
            });
        }*/
        
        $scope.saveCat = function (cat, isValid) {
            if(isValid) {
                catService.saveCat(cat);
                $window.location.href = "/#/list";
            }
        }
    };
    module.controller("addCatController",catController);
}(angular.module("app")));