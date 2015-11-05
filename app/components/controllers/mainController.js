(function(module) {

    var mainController = function ($scope, catsService, $filter) {

        catsService.getCats().then (function (data) {
            $scope.cats = $filter ("orderBy")(data, $scope.sortOrder.orderValue, true);
            $scope.currentCat = $scope.cats[0];
        })

        $scope.selectCat = function (cat) {
            $scope.currentCat = cat;
        }

        $scope.increaseVote = function (cat) {

            cat.vote = cat.vote + 1;
            catsService.updateCat(cat);
        }

        $scope.reduceVote = function (cat) {

            cat.vote = cat.vote > 0 ? cat.vote - 1 : 0;
            catsService.updateCat(cat);
        }

        $scope.searchCat = function (searchValue) {

            $scope.searchTerm = searchValue;
        }

        $scope.sortingOrders = [
            {name: "Sort by name", orderValue: "-name"},
            {name: "Sort by vote", orderValue: "-vote"}];

        $scope.sortOrder = $scope.sortingOrders[0];
    };

    module.controller("mainController", mainController);

}(angular.module("app")));