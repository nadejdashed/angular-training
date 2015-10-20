(function(module) {

    var addCatController = function ($scope, $filter, catService, getCats, userAuthorizationService) {

        var activeUser = userAuthorizationService.getActiveUser('userData');

        $scope.cats = getCats;

        if(activeUser !== null) $scope.activeUserLogin = activeUser.login;
        $scope.logoutButtonShow = userAuthorizationService.isUserActive(activeUser);

        $scope.logout = function(){
            userAuthorizationService.logoutUser('userData');
            $scope.logoutButtonShow = false;
        };

        $scope.saveCat = function(){
            if($scope.catName !== undefined || $scope.catUrl !== undefined)
            {
                var date = new Date();
                var data = {
                    'name': $scope.catName,
                    'link': $scope.catUrl,
                    'clickCount': 0,
                    'view': 0,
                    'addCatTime': $filter('date')(new Date(),'dd-MMM-yyyy'),
                    'creator': activeUser.login
                };
                catService.pushCats(data);
            }
        };


    };
    module.controller("addCatController", addCatController);
}(angular.module("app")));