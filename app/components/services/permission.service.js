angular.module('app').factory('permissionService', function ($http, $window, $q, $location, loginService) {

    var canEdit = function(owner){
        //TODO view-controller-service(equal owner - ng-show, ng-hide)
    }

    var canAdd = function() {
        return(loginService.getToken()!=null);
    }
    //TODO cat add dog(hide logout, add or login, registration)

    return{
        editPermission: canEdit,
        addPermissions: canAdd
    }
});