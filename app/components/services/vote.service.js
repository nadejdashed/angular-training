angular.module("app").service("voteService",
    function ($cookies, catsService) {
        function voteUpForCat(cat) {
            var updateCat = angular.copy(cat);
            updateCat.vote++;
            applyChangesForCat(updateCat, cat);
        };

        function voteDownForCat(cat) {
            var updateCat = angular.copy(cat);
            updateCat.vote--;
            applyChangesForCat(updateCat, cat);
        };


        function applyChangesForCat(updateCat, cat) {
            catsService.updateCatPromise(updateCat)
                .then(function(data) {
                    cat.vote = data.vote;
                    cat.isVoted = true;
                })
        }

        return {
            voteUpForCat: voteUpForCat,
            voteDownForCat: voteDownForCat
        };
    }
);