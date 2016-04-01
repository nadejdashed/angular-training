(function(module) {

	module.factory("catFactory", catFactory);

    function catFactory($http) {
        return {
            getAll: getAll,
            create: create,
            remove: remove,
            update: update
        };

        /////
        function getAll() {
            return $http.get("/cats");
        }

        function create() {

        }

        function remove(cat) {
        	return $http.delete("/cats/" + cat.id);
        }

        function update(cat) {
        	return $http.put("/cats/" + cat.id, cat);
        }
    }

}(angular.module("app")));
