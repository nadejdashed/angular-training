(function(module) {

    var catProfileController = function ($scope, catFactory, authService, $routeParams, $location) {

        var id = $routeParams.id;

        //for $http instead of $resource
/*      catFactory.getCatById(id).then(function(data) {
            $scope.cat = data;
        }, function() {});
*/

        //for $resource instead of $http
        $scope.cat = catFactory.getCatById(id);

/*
        $scope.counterInc = function(cat){
            cat.counter++;
        };

        $scope.counterDec = function(cat){
            cat.counter--;
        };
*/
        $scope.counterInc = catFactory.counterInc;

        $scope.counterDec = catFactory.counterDec;
    };

    module.controller("catProfileController", catProfileController);

}(angular.module("app")));