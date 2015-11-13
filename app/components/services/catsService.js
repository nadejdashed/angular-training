(function(module) {

    var catsService = function ($q, $http, userService) {

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

        var updateAfterLogin = function (cat) {
            $http.put('/cats/'+ cat.id , cat).then(function (response) {
                return response.data;
            });
        }

        var updateCat = function (cat) {

            isValidData = false;

            var dCat = cat;
            dCat.toString();

            userService.setCatForDelay(dCat);

            return $http.put('/cats/'+ cat.id , cat).then(function (response) {

                userService.setCatForDelay({});

                return response.data;
            });
        }

        var deleteSelectedCat = function (cat) {

            isValidData = false;

            return $http.delete('/cats/'+ cat.id , cat).then(function (response) {
                return response.data;
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
            deleteSelectedCat: deleteSelectedCat,
            getCatById: getCatById
        };

    }

    module.factory("catsService", catsService);

}(angular.module("app")));