(function(module) {

    var addCatController = function ($scope, catService, userService) {

        var user = userService.getActiveUser();
        $scope.activeUserLogin = user && user.login;

        $scope.saveCat = function()
        {
            var cat = {"name": $scope.catName, "url": $scope.catUrl};
            catService.saveCat(cat);
        };
    };
    module.controller("addCatController", addCatController);
}(angular.module("app")));