(function(module) {

	module.factory("catFactory", catFactory);

    function catFactory($http, dataStorage, $q) {
        return {
            getAll: getAll,
            create: create,
            remove: remove,
            update: update,
            changeVote: changeVote,
            canVoteFor: canVoteFor
        };

        /////
        function getAll() {
            return $http.get("/cats");
        }

        function create(cat) {
        	return $http.post("/cats", cat);
        }

        function remove(cat) {
        	return $http.delete("/cats/" + cat.id);
        }

        function update(cat) {
        	return $http.put("/cats/" + cat.id, cat);
        }

        function canVoteFor(cat) {
        	return !dataStorage.get("catVoted" + cat.id);
        }

        function changeVote(cat, changedBy) {
        	if (typeof cat.votes === 'undefined') {
                cat.votes = 0;
            }

            if (!canVoteFor(cat)) {
            	return $q.reject();
            }

            cat.votes = cat.votes + changedBy;
            return update(cat).then(function(response) {
            	dataStorage.put("catVoted" + cat.id, true);
            	return response;
            });
        }
    }

}(angular.module("app")));
