(function(module) {

    var mainController = function ($scope, $http, catService) {

        $scope.orderOptions = [{
            "value": "name",
            "text": "name asc"
        }, {
            "value": "-name",
            "text": "name desc"
        }];

        $scope.cats = catService.getAllCats();

        $scope.optionSelected = function(order){
            $scope.orederValue = order;
        }

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

        $scope.setVote = function(vote){
            if(vote > 0){
                $scope.selectedCat.vote++;
            }else{
                $scope.selectedCat.vote--;
            }
        }


    };

    module.controller("mainController", mainController);

}(angular.module("app")));