(function (module) {
    var catService = function ($http, $q) {

        //GET:
        var getAllCats = function () {
            var defer = $q.defer();
            $http.get('/event').success(function (response) {
                defer.resolve(response);
            });
            return defer.promise;
        };

        //POST:
        var addCat = function (cat) {
            var defer = $q.defer();
            $http.post("/event", cat).success(function (response) {
                defer.resolve(response);
            });
            return defer.promise;
        };

        return {
            name: "CatService",
            allCats: getAllCats,
            addCat: addCat
        };

    };

    module.service("catService", catService);
})(angular.module("app"));
