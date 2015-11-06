(function(module) {

    var mainController = function ($scope, catService) {
        $scope.$watch(catService.isValid, function(newValue, oldValue) {
            if(newValue != oldValue) {
                getCats();
            }
        });

        getCats();

        function getCats(){
            var promise = catService.getCats();
            promise.then(function successCallback(response) {
                $scope.cats = response.data;
                $scope.setCurrCat($scope.cats[0]);
            }, function errorCallback(response) {
                return null;
            });
        }

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
            if(cat.viewed !== true) {
                $scope.currCat.viewed = true;
                catService.updateCat($scope.currCat)
                    .then(function successCallback(response) {
                        // this callback will be called asynchronously
                        // when the response is available
                        getCats();
                        console.log("mainController - Update success!")
                    }, function errorCallback(response) {
                        // called asynchronously if an error occurs
                        // or server returns response with an error status.
                        console.log("Update failed!")
                    });
            }
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