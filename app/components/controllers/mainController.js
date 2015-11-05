(function(module) {

    var mainController = function ($scope, catService) {
        function getCats(){
            catService.getCats().then(function successCallback(response) {
                $scope.cats = response.data;
                $scope.setCurrCat($scope.cats[0]);
            }, function errorCallback(response) {
                return null;
            });
        }
        getCats();

        $scope.incrementCounter = function(cat) {
            cat.vote++;
            catService.updateCat(cat);
        };

        $scope.decrementCounter = function(cat) {
            cat.vote--;
            catService.updateCat(cat);
        };

        $scope.setCurrCat = function (cat) {
            $scope.currCat = cat;
            $scope.currCat.viewed = true;
            catService.updateCat($scope.currCat)
                .then(function successCallback(response) {
                    // this callback will be called asynchronously
                    // when the response is available
                    getCats();
                    console.log("Update success!")
                }, function errorCallback(response) {
                    // called asynchronously if an error occurs
                    // or server returns response with an error status.
                    console.log("Update failed!")
            });
        };

        $scope.deleteCurrCat = function() {
            debugger;
            catService.deleteCat($scope.currCat.id)
                .then(function successCallback(response) {
                    // this callback will be called asynchronously
                    // when the response is available
                    //    debugger;
                    console.log("Update success!");
                    getCats();
                    //$scope.$apply();
            }, function errorCallback(response) {
                // called asynchronously if an error occurs
                // or server returns response with an error status.
                    debugger;
                    console.log("Update failed!")
            });
        };

        $scope.addCat = function() {
            $scope.newCat.vote = 0;
            $scope.newCat.viewed = false;
            catService.addCat($scope.newCat)
                .then( function(){
                    debugger;
                    getCats();
                }

            );
        };

        $scope.$on('filter', function(event, args) {
            $scope.fltr=args;
        });

        $scope.$on('ordrBy', function(event, args) {
            $scope.ordrBy=args;
        })
    };

    module.controller("mainController", mainController);
}(angular.module("app")));