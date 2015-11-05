(function(module) {

    var voteSpinner = function () {
        return {
            restrict: "E",
            templateUrl: "templates/voteSpinner.html",
            scope: {
                voteNumber: '@',
                downVote: '&',
                upVote: '&'
            }
        };
    };

    module.directive("voteSpinner", voteSpinner);

}(angular.module("app")));