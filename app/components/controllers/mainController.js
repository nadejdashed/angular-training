(function(module) {

    var mainController = function($scope, catService) {

        $scope.data = {};

        var getAllCats = function(){
            catService.getAllCats().then(function(response){
                    $scope.data.cats = response;
                }
                ,function(error){
                    console.log(error);
                }
            );
        };

        getAllCats();

        $scope.$on("catListChanged", function(){
            getAllCats();
        });

        $scope.deleteCat = function(id){
            catService.deleteCat(id).then(
                function(){
                    getAllCats();
                }
                ,function(){
                    console.log("Cat could not be deleted!")
                }
            )
        };

        $scope.selectCat = function(e, cat){
            if (cat != $scope.selectedCat){
                $scope.selectedCat = cat;
                cat.viewed = true;
            }
            else {
                $scope.selectedCat = null;
            }
        };

        $scope.catUpVote = function(cat){
            cat.vote++;
        };

        $scope.catDownVote = function(cat){
            cat.vote--;
        };

        $scope.increaseClickNum = function(cat){
            cat.clickNum++;
        };

    };

    module.controller("mainController", mainController);

}(angular.module("app")));