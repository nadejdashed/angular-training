var module = angular.module('app');

module.service('userOneVoteService', function($window, localStorageService, userService){
    this.saveUserVote = function(vote, catId){
        var userLogin = userService.getActiveUser();
        //localStorageService.remove(userLogin);
        if(userLogin){
            var userLikedCats = JSON.parse(localStorageService.get(userLogin));

            if(!userLikedCats){
                userLikedCats = {};
                userLikedCats[catId] = vote;
                localStorageService.set(userLogin, JSON.stringify(userLikedCats));
            } else if(userLikedCats[catId] + vote <= 1 && userLikedCats[catId] + vote >= -1) {
                userLikedCats[catId] += vote;
                localStorageService.set(userLogin, JSON.stringify(userLikedCats));
                return true;
            }
            return false;
        }
    };
});
