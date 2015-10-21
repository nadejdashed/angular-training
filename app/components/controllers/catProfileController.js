(function(module) {

    var catProfileController = function ($scope, catFactory, authService, $routeParams, $location) {

        var id = $routeParams.id;
        catFactory.getCatById(id).then(function(data) {
            $scope.cat = data;
        }, function() {});

        $scope.counterInc = function(cat){
            cat.counter++;
        };

        $scope.counterDec = function(cat){
            cat.counter--;
        };

    };

    module.controller("catProfileController", catProfileController);

}(angular.module("app")));