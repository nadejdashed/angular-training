(function(module) {

    var mainController = function($scope, catService) {

        $scope.data = {};

        catService.getAllCats().then(function(response){
                $scope.data.cats = response;
            }
            ,function(error){
                console.log(error);
            }
        );

        $scope.selectCat = function(e, cat){
            if (cat != $scope.selectedCat){
                $scope.selectedCat = cat;
                cat.viewed = true;
            }
            else {
                if (!$(e.target).hasClass('btn'))
                    $scope.selectedCat = null;
            }
        };

        $scope.catUpVote = function(){
            if ($scope.selectedCat){
                $scope.selectedCat.votes++;
            }
        };

        $scope.catDownVote = function(){
            if ($scope.selectedCat){
                $scope.selectedCat.votes--;
            }
        };

        $scope.increaseClickNum = function(cat){
            cat.clickNum++;
        };
    };

    module.controller("mainController", mainController);

}(angular.module("app")));