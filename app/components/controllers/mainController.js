(function(module) {

    var mainController = function ($scope, catService, userService, getCats) {
        $scope.sort = "-name";

        $scope.checkUserPermissions = function(creator){ //need do iniversal service for all permission
            return userService.checkUserPermissions(creator);
        };

        $scope.cats = getCats;

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
                $scope.selectedCat = allCats[0];

                var catsCount = allCats.length;
                for(var i = 0; i < catsCount; i++ )
                    if(allCats[i].clickCount > 0){
                        $scope.goodRatingCats.push(allCats[i].name);
                    }
                }
            },
            true
        );

        $scope.$watch(     //voteSpinner same watch -- need ask about move into service
            userService.getActiveUser, //chekatsa function
            function( activeUser ) {
                $scope.activeUserLogin = activeUser && activeUser.login;
                $scope.logoutButtonShow = userService.isUserActive();
            },
            true
        );


    };

    module.controller("mainController", mainController);

}(angular.module("app")));