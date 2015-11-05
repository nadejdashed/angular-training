(function(module) {

    var voteSpinnerDirective = function () {

        return {
            restrict: "E",
            templateUrl: 'templates/voteSpinner.html',
            scope: {
                increaseFn: '&',
                reduceFn: '&'
            },
            controller: function ($scope) {

            }
        }
    }

    module.directive("voteSpinnerDirective", voteSpinnerDirective);

}(angular.module("app")));
