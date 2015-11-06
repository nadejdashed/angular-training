(function(module) {

    var listCatsController = function ($scope, $cookies, $filter, $parse, catsService, $state) {

        var didSelectCatFunction = function (cat) {
            $scope.selectedCat = cat;
            cat.wasAlreadyViewed = true;
            $state.go('listView.vote', {id : cat.id});
        };

        catsService.getCatsPromise()
            .then(function(data){
                $scope.cats = data;
                didSelectCatFunction($scope.cats[0]);
            });

        $scope.applyFilter = function (newFilterText) {
            $scope.filterText = newFilterText;
        };

        $scope.didSelectCat = didSelectCatFunction;

        $scope.deleteCat = function (cat) {
            catsService.deleteCatPromise(cat)
                .then(function(cat){
                    var index = $scope.cats.indexOf(cat);
                    $scope.cats.splice(index, 1);
                });
        };
    };

    module.controller("listCatsController", listCatsController);

}(angular.module("app")));