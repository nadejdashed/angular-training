/**
 * Created by Ievgen_Budnikov on 11/4/2015.
 */
(function(module) {

    var catController = function ($scope, $http, $location) {
        var cid = $location.search().catid;


        $http({method: 'GET', url: 'http://localhost:8000/cats/' + cid}).then(function successCallback(response) {
            $scope.cat = response.data;

        }, function errorCallback(response) {
            alert("Failed loading cats");
        });

    };



    module.controller("catController", catController);

}(angular.module("app")));