(function(module) {
    "use strict";

    module.directive("quickSubmit", quickSubmitDirective);

    function quickSubmitDirective($parse) {
        return {
            restrict: "A",
            //require: "ngSubmit", // Doesn't work! But Why???
            compile: compileFunc
        };

        function compileFunc($scope, element, attrs, ctrl) {
	        return {
	            post: postLink
	        };
	    }

	    function postLink($scope, element, attrs, ngSubmit) {
	    	var submitFunc;
	    	if (attrs.ngSubmit) {
	    		submitFunc = $parse(attrs.ngSubmit);
	    	}
	    	if (submitFunc) {
		        element.bind("keydown", function(event) {
		            if (event.keyCode === 13) {
		            	submitFunc($scope);
		            }
		        });
	    	}
		}
    }

}(angular.module("app")));
