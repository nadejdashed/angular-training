angular.module("app").directive("votes", function(){
    return {
        templateUrl: "templates/votes.html",
        scope : {
            object: "=object",
            someFunction: "&function"
        },
        controller: function($scope) {
            $scope.like = function (object) {
                object.clicks++;
                $scope.someFunction();
            }
            $scope.dislike = function (object) {
                object.clicks--;
            }
        }
    };
});