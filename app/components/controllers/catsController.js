(function (module) {
    var catsController = function ($scope, $http) {

        //read json with cats
        $http.get('json/cats.json').success(function (data) {
            $scope.cats = data;
        });

        //process selected cat
        $scope.selectCat = function (currentCat) {
            $scope.cat = currentCat;
        };
    };

    module.controller("catsController", catsController);

}(angular.module("app")));