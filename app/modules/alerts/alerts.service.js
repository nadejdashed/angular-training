angular.module('alertsModule').factory('alertsService', function($injector){
	var messages = [];

	var closeMessage = function (message) {
		var ind = messages.indexOf(message);
		if (ind >= 0) {
			messages.splice(ind, 1);
		}
	}

	function addError(message){
		messages.push(message);
		//console.log(message);

		var $timeout = $injector.get('$timeout');
		$timeout(function() {
			closeMessage(message);
			//var ind = messages.indexOf(message);
			//if (ind >= 0) {
			//	messages.splice(ind, 1);
			//}
		}, 2000);
	}

	function handleErrorResponse(error){
		var errorMessage = error.data && error.data.error;
		addError(errorMessage);
	}

	function init(){
		var $rootElement = $injector.get('$rootElement'),
			$rootScope = $injector.get('$rootScope'),
			$compile = $injector.get('$compile'),
			scope = $rootScope.$new();

		scope.messages = messages;
		scope.closeMessage = closeMessage;
		$rootElement.after($compile('<alerts></alerts>')(scope));
	}

	return {
		init: init,
		addError: addError,
		handleErrorResponse: handleErrorResponse
	}
});