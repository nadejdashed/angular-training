(function(module) {

    var setFocus = function () {
        return {
            restrict: "A",
            link: function (scope, element) {
                element[0].focus();
            }
        };
    };

    module.directive("setFocus", setFocus);

}(angular.module("app")));