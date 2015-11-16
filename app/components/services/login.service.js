angular.module("app").service("loginService",
    function($http, $rootScope, userService, alertsService){

        function loginUser(userData) {
            return $http.post('/auth', userData)
                .then(function(resp) {
                    if (resp.data.user && resp.data.token) {
                        userService.setLoginWithToken(resp.data.user.login, resp.data.token);
                    } else {
                        userService.clearLoginWithToken();
                        alertsService.addError("Can not login because server has returned wrong data. Try to register again.");
                    }

                });
        }

        function signUpUser(userData) {
            return $http.post('/register', userData)
                .then( function(resp) {
                    if (userData) {
                        loginUserData = {
                            login: userData.login,
                            password: userData.password
                        };
                        return loginUser(loginUserData);
                    } else {
                        userService.clearLoginWithToken();
                        alertsService.addError("Can not register because server has returned wrong data.");
                    }
                });
        }

        return {
            loginUser: loginUser,
            signUpUser: signUpUser
        }
    }
);