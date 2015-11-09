(function(module) {

    var errorHandler = function ($provide) {
        $provide.decorator('$exceptionHandler', ['$delegate', 'displayExceptionService',
            function($delegate, displayExceptionService) {
                return function(exception, cause) {
                    displayExceptionService.displayException(exception);
                    $delegate(exception, cause);
                };
            }
        ]);
    };

    module.config(errorHandler);

}(angular.module("app")));