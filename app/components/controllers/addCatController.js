(function(module) {
    var catController = function ($scope, catService, $stateParams, $window, $cookies) {
        // TODO use loginService.isLoggedIn function. 
        // You also can add possibility not to show possibility to add cat if user is not logged in and redirect from this page to about 
        
        var loginId = $cookies.get("logedIn");
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