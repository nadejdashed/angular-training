(function(module) {

    var mainController = function ($scope, $http, $cookies, $location, catService) {
        //$http({
        //    method: 'GET',
        //    url: '/json/cats.json'
        //}).then(function(d) {
        //    $scope.cats = d.data;
        //});

        var getCatResponse = catService.cat.get({id: 3}, function() {
            // Id will be id=1 because in mock.js has .respond(data[0]);
            console.log('getCatResponse = ', getCatResponse);
        });

        $scope.cats = catService.queryCat();
        
        $scope.sorting = ['ascending', 'descending'];

        $scope.addCat = function() {
            $scope.searchResults = [
                {
                    id: $scope.cats.length + 1,
                    name: '',
                    src: 'http://f.tqn.com/y/webclipart/1/S/9/9/5/No-cats.png',
                    vote: 0,
                    viewed: true
                }
            ]
        };

        $scope.sortCats = function(cat1, cat2) {
            if (cat1.name.toLowerCase() > cat2.name.toLowerCase()) return 1;
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
            if ($scope.searchResults) {
                $scope.searchResults.sort($scope.sortCats);
                if ($scope.selected == 'descending') {
                    $scope.searchResults.reverse();
                }
            }
        };

        $scope.resetForm = function(currentCat) {
            currentCat.isMessageVisible = false;
            currentCat.draftName = currentCat.draftPictUrl = '';
        };

        $scope.isNewCat = function(currentCat) {
            return currentCat.id > $scope.cats.length;
        };

        $scope.saveForm = function(currentCat, isValid) {
            if (isValid) {
                currentCat.date = +new Date();
                currentCat.name = currentCat.draftName;
                if (currentCat.draftPictUrl) {
                    currentCat.src = currentCat.draftPictUrl;
                }

                if (currentCat.id > $scope.cats.length) {
                    $scope.cats.push(currentCat);
                    catService.saveCat(currentCat);
                }

                $scope.resetForm(currentCat);

                var queryCatResponse = catService.cat.query(function() {
                    console.log('queryCatResponse = ', queryCatResponse);
                });
            } else {
                currentCat.isMessageVisible = true;
            }
        };

        $scope.saveUrl = function(currentCat) {
            currentCat.src = currentCat.draftPictUrl
        };

        $scope.changeVote = function(currentCat, dir) {
            if (!$cookies.get('catId-' + currentCat.id)) {
                currentCat.vote += dir;
                $cookies.put('catId-' + currentCat.id, currentCat.vote);
            }
        };

        $scope.$watch('searchResults', function(newValue, oldValue) {
            console.log('|||=== Watch for $scope.searchResults: ===');
            console.log('||| newValue =', newValue);
            console.log('||| oldValue =', oldValue);
        });
    };

    module.controller("mainController", mainController);

}(angular.module("app")));