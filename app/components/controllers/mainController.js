(function(module) {

    var mainController = function ($scope, catService, userService, getCats) {
        $scope.sort = "-name";

        var user = userService.getActiveUser();
        $scope.activeUserLogin = user && user.login;

        $scope.checkUserPermissions = function(creator){ //need do iniversal service for all permission
            return userService.checkUserPermissions(creator);
        };

        $scope.cats = getCats;
        $scope.selectedCat = $scope.cats[0];

        $scope.show = function (cat) {
            cat.view = 1;
            $scope.selectedCat = cat;
        };

        $scope.searchCatNameFilter = '';

        $scope.search = function(searchCatName){
            $scope.searchCatNameFilter = searchCatName;
        };

        $scope.deleteCat = function(cat){
            catService.deleteCat(cat);
        };

        $scope.$watch(
            'cats',
            function( allCats ) {
                $scope.goodRatingCats = [];
                if(allCats){
                var catsCount = allCats.length;
                for(var i = 0; i < catsCount; i++ )
                    if(allCats[i].clickCount > 0){
                        $scope.goodRatingCats.push(allCats[i].name);
                    }
                }
            },
            true
        );




    };

    module.controller("mainController", mainController);

}(angular.module("app")));