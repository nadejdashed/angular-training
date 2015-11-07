/**
 * Created by Artem_Lazurenko on 07.11.2015.
 */
(function(module) {
    var editCatController = function ($scope, $routeParams, catService){

        catService.getCat($routeParams.id)
            .then(function(response) {
                $scope.cat = response.data;
            })

        $scope.updateCat = function(cat) {
            debugger;
            catService.updateCat(cat)
                .then(function (response){
                    $scope.cats = response.data;
                    catService.getCat($scope.cat.id)
                        .then(function(response) {
                            debugger;
                            $scope.cat = response.data;
                            return response;
                        })
                    return response;
                });
        };

        $scope.isValid = function() {

        }
    };

    module.controller("editCatController", editCatController);
}(angular.module("app")));
