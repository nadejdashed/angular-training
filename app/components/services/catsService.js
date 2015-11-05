(function(module) {

    var catsService = function ($q, $http, $resource) {

        var getCats = function () {

            return $http.get('/cats').then(function (response) {
                return response.data;
            });
        }

        var saveCat = function (cat) {

           return $http.post('/cats', cat);
        }

        var updateCat = function (cat) {

            console.log ('Cat updated!');
        }

        return {
            getCats: getCats,
            saveCat: saveCat,
            updateCat: updateCat
        };

    }

    module.factory("catsService", catsService);

}(angular.module("app")));