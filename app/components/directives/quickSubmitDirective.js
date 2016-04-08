(function(module) {
    "use strict";

    module.directive("quickSubmit", quickSubmitDirective);

    function quickSubmitDirective($parse, $document) {
        return {
            restrict: "A",
            link: linkFunc
        };

	    function linkFunc($scope, element, attrs) {
	    	var submitFunc;
	    	if (attrs.ngSubmit) {
	    		submitFunc = $parse(attrs.ngSubmit);
	    	}

			var submitOnEnter = function (event) {
				if (event.keyCode === 13) {
			       	submitFunc($scope);
			    }
			}

	    	if (submitFunc) {
		        $document.bind("keydown", submitOnEnter);
	    	}

	    	$scope.$on("$destroy", function() {
	    		$document.unbind("keydown", submitOnEnter);
	    	});
		}


    }

}(angular.module("app")));
