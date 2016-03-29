(function(module) {

    var mainController = function ($scope, $http) {
        $http({
            method: 'GET',
            url: '/json/cats.json'
        }).then(function(d) {
            $scope.cats = d.data;
        });

        $scope.text = "Cats";
        $scope.sorting = ['ascending', 'descending'];

        $scope.sortCats = function(cat1, cat2) {
            if (cat1.name > cat2.name) return 1;
        };

        $scope.count = function(cat) {
            if (cat.counter) {
                cat.counter++;
            } else {
                cat.counter = 1;
            }
        };

        $scope.showCat = function(cat) {
            $scope.searchResults = [];
            $scope.searchResults[0] = cat;
            $scope.searchResults[0].viewed = true;
        };

        $scope.search = function(text) {
            text = text ? text.toLowerCase() : '';

            $scope.searchResults = [];
            for (var i = 0; i < $scope.cats.length; i++) {
                if ($scope.cats[i].name.toLowerCase().indexOf(text) + 1) {
                    $scope.cats[i].viewed = true;
                    $scope.searchResults.push($scope.cats[i]);
                }
            }

            $scope.sortResults();
        };

        $scope.sortResults = function() {
            $scope.searchResults.sort($scope.sortCats);
            if ($scope.selected == 'descending') {
                $scope.searchResults.reverse();
            }
        };
    };

    module.controller("mainController", mainController);

}(angular.module("app")));