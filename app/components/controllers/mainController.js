(function (module) {

    var mainController = function ($scope, cats) {
        cats.query(function (cats) {
            $scope.cats = cats;
        });
        $scope.selectCat = function (cat) {
            cat.viewed = true;
            $scope.selectedCat = cat;
        };
        $scope.reverse = '0';
        $scope.positiveVotes = 0;
    };

    module.controller("mainController", mainController);

}(angular.module("app")));