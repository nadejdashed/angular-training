(function(module) {

    var catService = function($resource, $q) {
        var ResourceConstructor = $resource('/cats/:id', {id: '@id'},
            {
                'update': { method:'PUT' }
            });
        return {
            getAllCats : function() {
                var deferred = $q.defer();
                ResourceConstructor
                    .query(
                    function (response) {
                        deferred.resolve(response);
                    },
                    function (error) {
                        deferred.reject(error);
                    }
                );
                var promise = deferred.promise;
                return promise;
            },
            getCat: function (id) {
                var deferred = $q.defer();
                ResourceConstructor
                    .get(
                    {id:id},
                    function(cat) {
                        deferred.resolve(cat);
                    },
                    function(error) {
                        deferred.reject(error);
                    }
                );
                var promise = deferred.promise;
                return promise;
            },
            saveCat: function (cat) {
                var deferred = $q.defer();
                ResourceConstructor.update(
                    cat,
                    function (response) {
                        deferred.resolve(response);
                    },
                    function (error) {
                        deferred.reject(error);
                    }
                );
                return deferred.promise;
            },
            addNewCat: function (cat) {
                var deferred = $q.defer();
                ResourceConstructor.save(
                    cat,
                    function (response) {
                        deferred.resolve(response);
                    },
                    function (error) {
                        deferred.reject(error);
                    }
                );
                return deferred.promise;
            }
        }
    };

    module.factory("catService", catService);

}(angular.module("app")));
