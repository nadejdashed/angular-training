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
				// TODO unlink function when scope destroy
			}
		}
	}

	module.directive('enterSubmit', enterSubmitDirective);
})(angular.module('app'));