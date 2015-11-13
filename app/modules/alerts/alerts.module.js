angular.module("alertsModule", []).config(function($provide, $httpProvider){

	$httpProvider.interceptors.push('alertsInterceptor');

	$provide.decorator('$exceptionHandler', function($delegate, alertsService){
		return function(exception, cause) {
			$delegate(exception, cause);
			if (exception.message) {
				alertsService.addError(exception.message);
			} else {
				alertsService.addError(exception);
			}
		};
	});

}).run(function(alertsService){
	alertsService.init();
});