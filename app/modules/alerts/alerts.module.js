angular.module("alerts", []).config(function($provide, $httpProvider){

    $httpProvider.interceptors.push('alertInterceptor');

    $provide.decorator('$exceptionHandler', function($delegate, alertsService){
        return function(exception, cause) {
            $delegate(exception, cause);
            alertsService.addError(exception.message);
        };
    });
}).run(function(alertsService){
    alertsService.init();
});