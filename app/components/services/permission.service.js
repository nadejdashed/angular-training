angular.module('app').factory('permissionService', function ($http, $window, $q, $location, loginService) {

    var canAddEdit = function() {
        return loginService.getToken();
    };

    return{
        canAdd: canAddEdit
    }
});