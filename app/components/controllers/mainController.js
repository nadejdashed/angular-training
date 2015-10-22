(function(module) {

    var mainController = function ($scope, catService, userService, getCats, $uibModal) {
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

            var modalInstance = $uibModal.open({
                templateUrl: 'templates/modalWindow/deleteCatWindow.html',
                controller: 'deleteCatController',
                resolve: {
                    cat: function () {
                        return cat;
                    }
                }
            });

            modalInstance.result.then(function (cat) {

                var index = $scope.cats.indexOf(cat);

                $scope.cats.splice(index, 1);
                catService.deleteCat(cat);

            }, function () { // when  cancels
                console.log('Delete error :(');
            });
        };

        $scope.updateCatVotes = function(vote){
            $scope.selectedCat.clickCount = vote;
            catService.saveCat($scope.selectedCat);
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
            },
            true
        );


    };

    module.controller("mainController", mainController);

}(angular.module("app")));