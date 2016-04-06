(function(module) {
    "use strict";

     module.directive("loadFocus", loadFocusDirective);

    function loadFocusDirective() {
     	return {
     		restrict: "A",
     		compile: compileFunc
     	};

        function compileFunc($scope, element, attrs, ctrl) {
            return {
                post: postLink
            };
        }

        // focus not shown on UI - ask Q & rework
        // it works only when cat.html loads and shown at the beginning
        function postLink($scope, element, attrs, ctrl) {
            element[0].focus();
        }
    }

}(angular.module("app")));    