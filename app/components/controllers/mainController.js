(function(module) {

    var mainController = function($scope, catService, $cookieStore, catData) {

        $scope.data = {};
        $scope.data.cats = catData;

        $scope.deleteCat = function(id){
            catService.deleteCat(id).then(
                function(){
                    catService.getAllCats().then(
                        function(response){
                            $scope.data.cats = response;
                        }
                    )
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
            if (!$cookieStore.get("upvote_" + cat.id)){
                cat.vote++;
                $cookieStore.put("upvote_" + cat.id, true);
            }
            else{
                console.log("You have already upvoted this cat!")
            }

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