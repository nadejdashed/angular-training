/**
 * Created by Ievgen_Budnikov on 11/4/2015.
 */
(function(module) {

    var catController = function ($scope, $q, $http, $location, $routeParams , catService) {

        var cid = $routeParams.id;

        catService.getCatById(cid).then(function (data) {
            $scope.cat = data;
        });

        $scope.showAlert = function(){
            if(cid != undefined){
                saveCat($scope.cat);
            }else{
                addNewCat($scope.cat);
            }

        }

        function saveCat(cat){
            catService.saveCat(cat);
        }
        function addNewCat(cat){
            catService.addNewCat(cat);
        }

    };

    module.controller("catController", catController);

}(angular.module("app")));