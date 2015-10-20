angular.module('app').directive('voteSpinner', function() {
    return {
        restrict: 'E',
        templateUrl: '/app/templates/voteSpinner.html',
        scope: {
            currentCat: '=currentCat',
            currentUser: '=currentUser'
        },
        controller: function($scope){
            $scope.like = function (currentCat) {
                currentCat.clickCount += 1;
            };

            $scope.dislike = function (currentCat) {
                console.log(currentUser);
                currentCat.clickCount -= 1;
            };
        }
    };
});

