/**
 * Created by Mykhaylo_Tauzhniansk on 11/5/2015.
 */
(function (module) {

    var focusPocus = function ($parse, $timeout) {

        return {
            restrict: 'A',
            link: function(scope, element, attrs) {
                var model = $parse(attrs.focusDir);
                scope.$watch(model, function (value) {
                    if (value === true) {
                        $timeout(function () {
                            element[0].focus();
                        });
                    }
                })
            }
        };
    };
    module.directive("focusDir", focusPocus);

}(angular.module("app")));