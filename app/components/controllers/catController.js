/**
 * Created by Ievgen_Budnikov on 11/4/2015.
 */
(function(module) {

    var catController = function ($scope, $q, $http, $location, catService) {

        var cid = $location.search().catid;

        catService.getCatById(cid).then(function (data) {
            $scope.cat = data;
        });

        $scope.showAlert = function(){
            alert("Save clicked");
        }

    };

    module.controller("catController", catController);

}(angular.module("app")));