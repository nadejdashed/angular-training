(function(module) {
    var catController = function ($scope, catService, $stateParams, $window, $cookies) {
        var loginId = $cookies.get("logedIn");
        debugger;
        if(loginId > 0){
            $scope.logedIn = true;
        }
        
        $scope.saveCat = function (cat, isValid) {
            if(isValid) {
                cat.userId = loginId;
                catService.saveCat(cat);
                $window.location.href = "/#/list";
            }
        }
    };
    module.controller("addCatController",catController);
}(angular.module("app")));