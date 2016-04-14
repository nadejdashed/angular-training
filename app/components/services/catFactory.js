(function(module) {

	module.factory("catFactory", catFactory);

    function catFactory($resource, $http, dataStorage, $q) {

    	var Cat = $resource("/cats/:catId", { catId: "@id"}, {
        	'update': { method:'PUT' }
    	});

        return {
            getCat: getCat,
            getAll: getAll,
            create: create,
            remove: remove,
            update: update,
            changeVote: changeVote,
            canVoteFor: canVoteFor,
            getCatsWithPositiveVotes : getCatsWithPositiveVotes
        };

        /////
        var catsWithPositiveVotes = [];

        function getCatsWithPositiveVotes() {
            return catsWithPositiveVotes;
        }

        function getCat(id) {
            return Cat.get({catId:id}, function(data) {
                return data;
            }).$promise;
        }

        function getAll() {
        	var deferred = $q.defer();
            return Cat.query(function(data) {
            	return data;
            }).$promise;
        }

        function create(cat) {
        	return Cat.save(cat, function(data) {
        		return data;
        	}).$promise;
        }

        function remove(cat) {
        	return cat.$remove();
        }

        function update(cat) {
        	return cat.$update();
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

            if (changedBy > 0) {
                addCatWithPositiveVotes(cat);
            }

            cat.votes = cat.votes + changedBy;
            return update(cat).then(function(response) {
            	dataStorage.put("catVoted" + cat.id, true);
            	return response;
            });
        }

        function addCatWithPositiveVotes(cat) {
            var existingCat = catsWithPositiveVotes.find(function (v) {
                return v.id === cat.id;
            });
            if (!existingCat) {
                catsWithPositiveVotes.push(cat);
            }
        }
    }

}(angular.module("app")));
