(function(module) {

	var enterSubmitDirective = function($document) {
		return {
			restrict: 'A',
			scope: {
				submit: '&enterSubmit'
			},
			link: function(scope, element, attrs, ctrl) {
				$document.on('keypress', event => {
					if(event.keyCode === 13) {
						scope.submit();
					}
				});
			}
		}
	}

	module.directive('enterSubmit', enterSubmitDirective);
})(angular.module('app'));