(function(module) {

    var mainController = function ($scope, $q, $http, catService) {

        $scope.orderOptions = [{
            "value": "name",
            "text": "name asc"
        }, {
            "value": "-name",
            "text": "name desc"
        }];

        catService.cats().then(function(cats) {
            $scope.cats = cats;
        });

        $scope.performSearch = function(val){
            $scope.searchValue = val;
        }

        $scope.setCatsInfo = function(cat){
            $scope.selectedCat = cat;
            cat.show = true;
        }

        $scope.incrementClickCount = function(selectedCat){
            selectedCat.vote++;
        }

        $scope.setVote = function(cat, vote){
            if(vote > 0){
                cat.vote++;
            }else{
                cat.vote--;
            }
        }


    };

    module.controller("mainController", mainController);

}(angular.module("app")));