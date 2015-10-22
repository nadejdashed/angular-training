angular.module('alerts').factory('alertService', function($injector){
    var messages = [];

    function addError(message){
        messages.push(message);
        console.log(message);

    }

    function handleErrorResponse(error){
        var errorMessage = error.data &&error.data.error;
        addError(errorMessage);
    }

    function init(){
        var $rootElement = $injector.get('$rootElement'),
            $rootScope = $injector.get('$rootScope'),
            $compile = $injector.get('$compile'),
            scope = $rootScope.$new();

        scope.messages = messages;
    }

    return {
        init: init,
        addError: addError,
        handleErrorResponse: handleErrorResponse
    }
});