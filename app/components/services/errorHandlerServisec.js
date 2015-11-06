
angular.module('app').service("errorHandler",  function(){

    function CommonError(reject) {
        console.warn('CommonError', reject)
    }

    function connectionError(reject) {
        console.warn('connectionError', reject)
    }

    return {
        CommonError : CommonError,
        connectionError : connectionError
    }

});

