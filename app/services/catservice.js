/**
 * Created by Ievgen_Budnikov on 11/4/2015.
 */
(function(module) {

    var catService = function ($scope, $http) {

        function getAllCats(){
            $http({method: 'GET', url: 'http://localhost:8000/cats'}).then(function successCallback(response) {
                return response.data;

            }, function errorCallback(response) {
                alert("Failed loading cats");
            });

        }

        return {
            getAllCats: getAllCats,

        }
    };

    module.factory("catService", catService);

}(angular.module("app")));