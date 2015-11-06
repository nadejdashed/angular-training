/**
 * Created by Artem_Lazurenko on 06.11.2015.
 */
(function(module) {

    var deleteCatController = function($scope, catService) {
        $scope.deleteCurrCat = function() {
            catService.deleteCat($scope.currCat.id)
                .then(function successCallback(response) {
                    // this callback will be called asynchronously
                    // when the response is available
                        debugger;
                    console.log("deleteCatController - Update success!");
                    //$scope.$apply();
                }, function errorCallback(response) {
                    // called asynchronously if an error occurs
                    // or server returns response with an error status.
                    debugger;
                    console.log("deleteCatController - Update failed!")
                });
        };
    };

    module.controller("deleteCatController", deleteCatController);
}(angular.module("app")));