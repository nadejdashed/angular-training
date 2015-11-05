(function(module) {

    var focusDirective = function () {

        return {
            restrict: "A",
            link: function (scope, element) {
               element[0].focus();
            }
        }
    }

    module.directive("focusDirective", focusDirective);

}(angular.module("app")));
