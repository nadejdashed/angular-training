/**
 * Created by Ievgen_Budnikov on 11/4/2015.
 */
(function(module) {

    var catService = function ($http, $q) {

        function asyncCats() {
            var deferred = $q.defer();

            $http.get('http://localhost:8000/cats').then(function (response) {
                    deferred.resolve(response.data);
                    return deferred.promise;
                }, function (response) {
                    deferred.reject(errors);
                    return deferred.promise;
                });

            return deferred.promise;
        }

        function getCatById(url){
            var deferred = $q.defer();
            $http.get().then(function (response) {
                deferred.resolve(response.data);
                return deferred.promise;
            }, function (response) {
                deferred.reject(errors);
                return deferred.promise;
            });

            return deferred.promise;
        }

        return{
            cats: asyncCats(),
            catBiId: getCatById()
        }


    };

    module.service("catService", catService);

}(angular.module("app")));