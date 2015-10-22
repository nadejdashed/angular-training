angular.module('app').directive('voteSpinner', function() {
    return {
        restrict: 'E',
        templateUrl: '/app/templates/voteSpinner.html',
        scope: {
            currentCat: '=currentCat',
            updateCatVotes: '&'
        },
        controller: function($scope){
            $scope.like = function (currentCat) {
                currentCat.clickCount += 1;
                $scope.updateCatVotes({vote: currentCat.clickCount}); // there in {} we have our arguments
            };

            $scope.dislike = function (currentCat) {
                currentCat.clickCount -= 1;
                $scope.updateCatVotes({vote: currentCat.clickCount});
            };
        }
    };
});

