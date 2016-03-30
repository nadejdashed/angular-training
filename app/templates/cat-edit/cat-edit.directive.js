(function(module) {

	var catEditDirective = function() {
		return {
			restrict: 'E',
			templateUrl: './app/templates/cat-edit/cat-edit.template.html',
			scope: {
				cat: '=ngModel'
			},
			controller: function($scope) {

			},
			link: function(scope, element) {
				
			}
		}
	}

	module.directive('catEdit', catEditDirective);
})(angular.module('app'));