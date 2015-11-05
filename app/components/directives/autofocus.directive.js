(function(module) {

    var autofocusDirective = function () {
        return {
            restrict: "A",
            link: {
                post: function (scope, elem, attrs, ctrls) {
                    var autofocusElement = elem[0].querySelector('[name=' + attrs.autofocusDirective + ']');
                    if (autofocusElement) { autofocusElement.focus(); }
                }
            }
        }

    };

    module.directive("autofocusDirective", autofocusDirective);

}(angular.module("app")));