(function(module) {

    var errorHandler = function ($provide) {
        $provide.decorator('$exceptionHandler', ['$delegate',
            function($delegate) {
                return function(exception, cause) {
                    $('#display-error').show().append(
                        '<h5 style="color: darkred;">' + exception + '</h5>'
                    );
                    $delegate(exception, cause);
                };
            }
        ]);
    };

    module.config(errorHandler);

}(angular.module("app")));