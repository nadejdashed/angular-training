(function(module) {

    var mainController = function ($scope, catsService, $q) {
        $scope.orderBySelected= null;
        $scope.cat = null;

        catsService.allcats().then(function(values){
             $scope.cats =  values;
        });

        $scope.countClick = function(cat){
            cat.click_num++;
        }
        $scope.selectCat = function(cat){
            $scope.cat = cat;
            $scope.cat.is_viewed = true;
        }

        $scope.plusClick = function(cat){
            $scope.countClick(cat);
        }
        $scope.minusClick = function(cat){
            cat.click_num--;
        }

        $scope.searchClick = function(search){
            $scope.searchCat = {cat_name:search};
        }

        $scope.addCatClick = function(){
        }

    };

    module.controller("mainController", mainController);

}(angular.module("app")));