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
            catsService.updateVote(cat);
        }
        $scope.minusClick = function(cat){
            cat.click_num--;
            catsService.updateVote(cat);
        }

        $scope.searchClick = function(search){
            $scope.searchCat = {cat_name:search};
        }

        $scope.deleteClick = function(){
            catsService.removeCat($scope.cat).then(function(values){

                catsService.allcats().then(function(values){
                    $scope.cats =  values;
                    $scope.cat = cats[0];
                    $scope.$digest;
                });
            });
        }

    };

    module.controller("mainController", mainController);

}(angular.module("app")));