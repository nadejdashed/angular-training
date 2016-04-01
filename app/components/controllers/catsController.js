(function (module) {
    var catsController = function ($scope, catService) {

        catService.allCats().then(function (data) {
            $scope.cats = data;
            $scope.cat = data[0];
        });

        //process selected cat
        $scope.selectCat = function (currentCat) {
            $scope.cat = currentCat;
        };
    };

    module.controller("catsController", catsController);

}(angular.module("app")));