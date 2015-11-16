angular.module("app").service("voteService",
    function ($cookies, catsService) {
        function isCatVoted(cat){
            var votedCats = $cookies.getObject("votedCats");
            return cat!=undefined && votedCats!=undefined && votedCats.indexOf(cat.id) >= 0;
        }

        function putCooke(cat) {
            var votedCats = $cookies.getObject("votedCats");
            if (!votedCats) {votedCats = [];}
            if (votedCats.indexOf(cat.id)<0) {
                votedCats.push(cat.id);
                $cookies.putObject("votedCats", votedCats);
            }
        }

        function voteUpForCat(cat) {
            cat.voteUp();
            //cat.vote++;
            //catsService.updateCatPromise(cat)
            //    .then(function(data) {
            //    })
        };

        function voteDownForCat(cat) {
            cat.vote--;
            putCooke(cat);
            catsService.updateCatPromise(cat);
        };

        return {
            voteUpForCat: voteUpForCat,
            voteDownForCat: voteDownForCat,
            isCatVoted: isCatVoted
        };
    }
);