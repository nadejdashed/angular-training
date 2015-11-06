/**
 * Created by Artem_Lazurenko on 06.11.2015.
 */
(function(module) {
    var addCatController = function (){

        $scope.addCat = function() {
            $scope.newCat.vote = 0;
            $scope.newCat.viewed = false;
            catService.addCat($scope.newCat)
                .then( function(){
                    getCats();
                }

            );
        };
    };

    module.controller("addCatController", addCatController);
}(angular.module("app")));
