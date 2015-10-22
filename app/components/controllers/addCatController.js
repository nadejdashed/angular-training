(function(module) {

    var addCatController = function ($scope, catService, userService) {

        $scope.saveCat = function()
        {
            var cat = {"name": $scope.catName, "url": $scope.catUrl};
            catService.saveCat(cat);
        };

        $scope.$watch(     //voteSpinner same watch -- need ask about move into service
            userService.getActiveUser, //chekatsa function
            function( activeUser ) {
                $scope.activeUserLogin = activeUser && activeUser.login;
            },
            true
        );
    };
    module.controller("addCatController", addCatController);
}(angular.module("app")));