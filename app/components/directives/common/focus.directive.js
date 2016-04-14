(function(module) {

	var focusDirective = function() {
		return {
			restrict: 'A',
			link: function(scope, element, attrs) {
				element[0].focus();
			}
		}
	}

	module.directive('focus', focusDirective);
})(angular.module('app'));