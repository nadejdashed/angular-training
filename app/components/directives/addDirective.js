(function(module) {

    var addDirective = function () {

        return {
            restrict: "E",
            templateUrl: '',
            scope: {

            },
            controller: function ($scope) {

            }
        }
    }

    module.directive("addDirective", addDirective);

}(angular.module("app")));
