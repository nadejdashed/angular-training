(function(module) {

    var catsService = function ($q, $http, $resource) {

        var isValidData = false;

        var getValid = function () {
            return isValidData;
        }

        var getCats = function () {

            return $http.get('/cats').then(function (response) {

                isValidData = true;

                return response.data;
            });
        }

        var saveCat = function (cat) {

            isValidData = false;

            return $http.post('/cats', cat);
        }

        var updateCat = function (cat) {

            isValidData = false;

            return $http.put('/cats/'+ cat.id , cat).then(function (response) {

            });
        }

        var deleteCat = function (cat) {

            isValidData = false;

            return $http.delete('/cats/'+ cat.id , cat).then(function (response) {

            });
        }

        var getCatById = function (id) {

            return $http.get('/cats/'+ id).then(function (response) {
                return response.data;
            });
        }

        return {
            getValid:getValid,
            getCats: getCats,
            saveCat: saveCat,
            updateCat: updateCat,
            deleteCat: deleteCat,
            getCatById: getCatById
        };

    }

    module.factory("catsService", catsService);

}(angular.module("app")));