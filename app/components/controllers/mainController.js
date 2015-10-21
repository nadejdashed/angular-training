(function(module) {

    var mainController = function ($scope, catService, userService) { // , mainService  --> add after $scope
        $scope.sort = "-name";

        var activeUser = userService.getActiveUser();

        if(activeUser !== null) $scope.activeUserLogin = activeUser.login;
        $scope.logoutButtonShow = userService.isUserActive(activeUser);

        $scope.logout = function(){
            userService.logout('userData');
            $scope.logoutButtonShow = false;
        };

        catService.getCats().then(function(data){
            $scope.cats = data;
            $scope.selectedCat = $scope.cats[0];
        });

        $scope.show = function (cat) {
            cat.view = 1;
            $scope.selectedCat = cat;
        };

        $scope.searchCatNameFilter = '';

        $scope.search = function(searchCatName){
            $scope.searchCatNameFilter = searchCatName;
        };

        $scope.deleteCat = function(catId){
            catService.deleteCat(catId);
        };

        $scope.$watch(
            'cats',
            function( allCats ) {
                $scope.goodRatingCats = [];
                if(allCats){
                var catsCount = allCats.length;
                for(var i = 0; i < catsCount; i++ )
                    if(allCats[i].clickCount > 0)
                        $scope.goodRatingCats.push(allCats[i].name);
                }
            },
            true
        );




    };

    module.controller("mainController", mainController);

}(angular.module("app")));