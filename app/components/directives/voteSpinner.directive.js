(function (module) {

    var voteSpinner = function () {

        return {
            restrict: 'EA',
            scope: {
                item: "=",
                incVote: "&",
                decVote: "&"
            },
            templateUrl: "/templates/voteSpinner.html",
            controller: "votesController"
        };
    };

    module.directive('voteSpinner', voteSpinner)
}(angular.module("app")));