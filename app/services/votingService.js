angular.module("app").factory('votingService',['$cookies',
    function($cookies){
        var loginId = $cookies.get("logedIn");
        var upVote =  function (selectedCat) {
            debugger;
            // TODO $cookies.get("UpVoters." + loginId) || ""
            var upCatsIds = $cookies.get("UpVoters." + loginId);
            if(loginId === selectedCat.userId){
                return;
            }
            if(upCatsIds == null || upCatsIds == undefined){
                upCatsIds = "";
            }
            var upCatsMassive = upCatsIds.split(",");
            // TODO var hasVoredForTheCat = upCatsMassive.indexOf(selectedCat.id) >= 0;
            var hasVoredForTheCat = false;
            for(var i = 0; i < upCatsMassive.length; i++){
                if(selectedCat.id == upCatsMassive[i]){
                    hasVoredForTheCat = true;
                    break;
                }
            }
            if(hasVoredForTheCat){
                return;
            }
            selectedCat.vote++;
            upCatsIds = upCatsIds + "," + selectedCat.id;
            $cookies.put("UpVoters." + loginId, upCatsIds);
            
            // TODO Move this functionality in profile service. Voting service doesn't need know where information is saved about profile
            var votedForCats = localStorage.getItem("profile."+loginId + ".voted");
            if(votedForCats == null || votedForCats == undefined){
                votedForCats = selectedCat.name;
            }else{
                votedForCats = votedForCats + ", " + selectedCat.name;
            }
            localStorage.setItem("profile."+loginId + ".voted", votedForCats);
        };

        // TODO better to create custom angular.filter component in separate file
        // app.filter('filterVote', function() { return function(item, prop, option) { return ...} }
        // cat in cats | filter: search:cat | filterVote:'vote':votesFilter | orderBy:sortBy
            
        var filterByVotes = function(prop, option){
            return function(item){
                if(option == undefined){
                    return true;
                }
                switch (option){
                    case "1": return item[prop]>0; break;
                    case "2": return item[prop]==0;break;
                    case "3": return item[prop]<0;break;
                    default: return true;break;
                }
            }
        };

        return {
            name:"votingService",
            upVote:upVote,
            filterByVotes:filterByVotes        };
    }]);