angular.module('alerts').factory('alertInterceptor', function($q, alertService){
    return {
        responseError: function(resp){
            alertsService.handleErrorResponse(resp);
            return $q.reject(resp);
        }
    }
});