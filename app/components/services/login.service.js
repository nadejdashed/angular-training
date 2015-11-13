angular.module("app").service("loginService",
    function($http, userService){

        function loginUser(userData) {
            return $http.post('/auth', userData)
                .then(function(resp) {
                    userService.setLoginWithToken(resp.data.user.login, resp.data.token);
                });
        }

        function signUpUser(userData) {
            return $http.post('/register', userData)
                .then( function(resp) {
                    loginUserData = {
                        login: userData.login,
                        password: userData.password
                    };
                    return loginUser(loginUserData);
                });
        }

        return {
            loginUser: loginUser,
            signUpUser: signUpUser
        }
    }
);