angular.module("app").controller("listCatsController",
    function ($scope, $cookies, $filter, catsService, selectedCat) {

        var didSelectCatFunction = function (cat) {
            $scope.selectedCat = cat;
            if (cat) {
                cat.wasAlreadyViewed = true;
            }
            //$state.go('listView.vote', {id : cat.id});
        };

        catsService.getCatsPromise()
            .then(function(data) {
                $scope.cats = data;
                if (selectedCat) {
                    didSelectCatFunction(selectedCat);
                } else {
                    didSelectCatFunction($scope.cats[0]);
                }
            });

        $scope.applyFilter = function (newFilterText) {
            $scope.filterText = newFilterText;
        };

        $scope.didSelectCat = didSelectCatFunction;

        $scope.deleteCat = function (cat) {
            catsService.deleteCatPromise(cat)
                .then(function(cat) {
                    var index = $scope.cats.map(function(catItem) {
                        return catItem.id;
                    }).indexOf(cat.id);
                    if (index>=0) {
                        $scope.cats.splice(index, 1);
                        if (index>$scope.cats.length) {
                            index = $scope.cats.length - 1;
                        }
                    }
                    didSelectCatFunction($scope.cats[index]);
                });
        };
    }
);