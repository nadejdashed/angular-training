(function (module) {
    "use strict";

    module.factory("sharedCats", sharedCats);

    function sharedCats(catFactory, $q) {
        loadCats();

        return {
            getAll: getAll,
            getCat: getCat,
            remove: remove
        };

        var cachedCats;

        function getAll() {
            // if (cachedCats) {
                return $q.resolve(cachedCats);
            // }
            //
            // return loadCats();
        }

        function getCat(id) {
            // if (cachedCats) {
                return $q.resolve(findCatById(id));
            // }
            //
            // return loadCats().then(function(response) {
            //     return findCatById(id);
            // });
        }

        function findCatById(id) {
            id = parseInt(id);
            return cachedCats.find(function (v) {
                return v.id === id;
            });
        }

        function remove(cat) {
            return catFactory.remove(cat).then(function (response) {
                var index = cachedCats.findIndex(function (v) {
                    return v.id === cat.id;
                });
                if (index !== -1) {
                    cachedCats.splice(index, 1);
                }
            });
        }

        function loadCats() {
            return catFactory.getAll().then(function (data) {
                cachedCats = data;
                return cachedCats;
            });
        }
    }


}(angular.module("app")));