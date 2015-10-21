angular.module("app").factory('permissionsService', function(userService) {
    function isOwner(footballer) {
        var user = userService.getLoggedInUser();
        return user && footballer.owner == user.login;
    }
    function loggedIn() {
        return userService.getLoggedInUser();
    }
    return {
        isOwner: isOwner,
        loggedIn: loggedIn
    };
})