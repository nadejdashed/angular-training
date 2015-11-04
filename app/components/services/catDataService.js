(function(module) {

    var catService = function($resource, $q) {
        var resource = $resource('../../model/cats.json/:id', {id: '@id'});
        return {
            getAllCats : function() {
                var deferred = $q.defer();
                resource
                    .query(
                    function (response) {
                        deferred.resolve(response);
                    },
                    function (response) {
                        deferred.reject(response);
                    }
                );
                var promise = deferred.promise;
                return promise;
            },
            getCat: function () {
                var deferred = $q.defer();
                resource
                    .get(
                    {id: 1},
                    function (response) {
                        deferred.resolve(response);
                    },
                    function (response) {
                        deferred.reject(response);
                    }
                );
                var promise = deferred.promise;
                return promise;
            },
            save: function (cat) {
                var deferred = $q.defer();
                cat.id = 999;
                resource.save(
                    event,
                    function (response) {
                        deferred.resolve(response);
                    },
                    function (response) {
                        deferred.reject(response);
                    }
                );
                return deferred.promise;
            }
        }
    };

    module.factory("catService", catService);

}(angular.module("app")));
