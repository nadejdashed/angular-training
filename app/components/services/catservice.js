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

        function getCatById(id){

            var deferred = $q.defer();

            $http.get('http://localhost:8000/cats/' + id).then(function (response) {
                deferred.resolve(response.data);
                return deferred.promise;
            }, function (response) {
                deferred.reject(errors);
                return deferred.promise;
            });

            return deferred.promise;
        }

        function addNewCat(cat){

            var deferred = $q.defer();

            $http.post('http://localhost:8000/cats', cat).then(function (response) {
                deferred.resolve(response.data);
                return deferred.promise;
            }, function (response) {
                deferred.reject(errors);
                return deferred.promise;
            });

            return deferred.promise;
        }

        function saveCat(cat){

            var deferred = $q.defer();

            $http.put('http://localhost:8000/cats/' + cat.id, cat).then(function (response) {
                deferred.resolve(response.data);
                return deferred.promise;
            }, function (response) {
                deferred.reject(errors);
                return deferred.promise;
            });

            return deferred.promise;
        }

        return{
            cats: asyncCats,
            getCatById: getCatById,
            addNewCat: addNewCat,
            saveCat: saveCat
        }


    };

    module.service("catService", catService);

}(angular.module("app")));