angular.module("app").service("catsFactoryService",
    function ($cookies, $injector) {

        function isVotedCatWithId(id){
            var votedCats = $cookies.getObject("votedCats");
            return votedCats!=undefined && votedCats.indexOf(id) >= 0;
        };

       var putCooke = function(id) {
            var votedCats = $cookies.getObject("votedCats");
            if (!votedCats) {votedCats = [];}
            if (votedCats.indexOf(id)<0) {
                votedCats.push(id);
                $cookies.putObject("votedCats", votedCats);
            }
        };

        var isVoted = false;

        var voteUp = function()
        {
            var catsService = $injector.get('catsService');

            var updateCat = angular.copy(this);
            updateCat.vote++;
            catsService.updateCatPromise(updateCat.getJSONData())
                .then(function(data) {
                    this.vote = data.vote;
                    putCooke(id);
                    isVoted = true;
                })
        };

        var getJSONData = function(){
            return {
                id: this.id,
                name: this.name,
                src: this.src,
                vote: this.vote,
                owner: this.owner
            }
        };

        var voteDown = function()
        {
            isVoted = true;
        };

        var catItemForResp = function (resp) {
            isVoted = isVotedCatWithId(resp.id);
            return {
                id: resp.id,
                name: resp.name,
                src: resp.src,
                vote: resp.vote,
                owner: resp.owner,
                voteUp: voteUp,
                voteDown: voteDown,
                get isVoted() {
                    return isVoted;
                },
                getJSONData: getJSONData

            }
        };

        var catsArrayForResp = function (resp) {
            var catsArray = [];
            angular.forEach(resp, function(catResp) {
                catsArray.push(catItemForResp(catResp));
            });
            return catsArray;
        };

        return {
            catItemForResp: function (resp) {
                return catItemForResp(resp);
            },
            catsArrayForResp: function (resp) {
                return catsArrayForResp(resp);
            }
        };
    }
);