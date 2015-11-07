(function(module) {

    var mainController = function ($scope, catsService, $filter, cats) {

        $scope.sortingOrders = [
            {name: "Sort by name", orderValue: "-name"},
            {name: "Sort by vote", orderValue: "-vote"}];

        $scope.sortOrder = $scope.sortingOrders[0];


        $scope.cats = $filter ("orderBy")(cats, $scope.sortOrder.orderValue, true);

        $scope.$watch(catsService.getValid, function (newValue) {

            if (newValue === false) {
                var newCats = catsService.getCats().then(function (data) {
                    $scope.cats = $filter ("orderBy")(data, $scope.sortOrder.orderValue, true);
                });
            }
        });

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
    };

    module.controller("mainController", mainController);

}(angular.module("app")));