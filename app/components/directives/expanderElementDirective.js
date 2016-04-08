(function(module) {
    "use strict";

    module.directive("expanderElement",  expanderElementDirective);

    function expanderElementDirective() {
    	return {
    		restrict: "AE",
    		scope: {
    			visible: "="
    		},
    		transclude: "element",
    		link: function($scope, element, attrs, ctrl, transclude) {
    			var transcludeResult
    			$scope.$watch("visible", function(value) {
    				if (value && !transcludeResult) {
    					transcludeResult = transclude($scope);
    					element.parent().append(transcludeResult);
    				}
    			});    			
    		}
    	}
    }

} (angular.module("app")));