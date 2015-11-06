/**
 * Created by Artem_Lazurenko on 06.11.2015.
 */
(function(module) {
    var addCatController = function ($scope, catService){

        $scope.addCat = function() {
            var newCat = $scope.newCat;
            debugger;
            newCat.vote = 0;
            newCat.viewed = false;
            catService.addCat(newCat)
                .then( function(response){
                    $scope.cats = response.data;
                }

            );
        };
    };

    module.controller("addCatController", addCatController);
}(angular.module("app")));
