var module = angular.module('app');

module.service('userAuthorizationService', function(localStorageService, cookiesService, $location){     // this function for save user in local storage. We don't use it

    this.isUserActive = function(activeUser){
        if(aciveUser !== nullt)
            return true;
        else
            return false;
    };

    this.getActiveUser = function(cookieName){
        return cookiesService.getCookie(cookieName);
    };

    this.setActiveUser = function(cookieName, data){
        return cookiesService.setCookie(cookieName, data);
    };

    var getUser = function(userLogin) {
        return localStorageService.get(userLogin);
    };

    this.createUser = function(user){
        if (!getUser(user.login)){
            localStorageService.set(user.login, JSON.stringify(user));
            $location.path('/');
        }
        else
            alert('Such user already exist!!!');
    };

    this.userAuthentication = function(user){
        var userData = getUser(user.login);


        if (checkUserLoginData(userData, user))
        {
            this.setActiveUser('userData', userData);
            $location.path('/');
        }
    };

    var checkUserLoginData = function(userTrueData, userLoginData) {
           return (userTrueData.login == userLoginData.login && userTrueData.password == userLoginData.password) ;
    };
});
