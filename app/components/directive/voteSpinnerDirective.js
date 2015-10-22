angular.module('app').directive('voteSpinner', function() {
    return {
        restrict: 'E',
        templateUrl: '/app/templates/voteSpinner.html',
        scope: {
            currentCat: '=currentCat'
        },
        controller: function($scope){
            $scope.like = function (currentCat) {
                currentCat.clickCount += 1;
            };

            $scope.dislike = function (currentCat) {
                currentCat.clickCount -= 1;
            };
        }
    };
});

