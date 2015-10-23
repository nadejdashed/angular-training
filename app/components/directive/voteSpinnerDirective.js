angular.module('app').directive('voteSpinner', function() {
    return {
        restrict: 'E',
        templateUrl: '/app/templates/voteSpinner.html',
        scope: {
            currentCat: '=currentCat',
            updateCatVotes: '&'
        },
        controller: function($scope, userOneVoteService){
            $scope.like = function (currentCat) {
                var canSave = userOneVoteService.saveUserVote(1, currentCat.id);
                if(canSave){
                    currentCat.clickCount += 1;
                    $scope.updateCatVotes(); // there in {} we have our arguments
                }
            };

            $scope.dislike = function (currentCat) {
                var canSave = userOneVoteService.saveUserVote(-1, currentCat.id);
                if(canSave){
                    currentCat.clickCount -= 1;
                    $scope.updateCatVotes(); // there in {} we have our arguments
                }
            };
        }
    };
});

