angular.module("app").service("userService",
    function($window, $rootScope) {
        var login = $window.sessionStorage.getItem("login");
        var token = $window.sessionStorage.getItem("token");

        return {
            getToken: function() {
                return token;
            },
            getLogin: function() {
                return login;
            },
            setLoginWithToken: function(newLogin, newToken) {
                login = newLogin;
                token = newToken;
                $window.sessionStorage.setItem("login", login);
                $window.sessionStorage.setItem("token", token);
            },
            clearLoginWithToken: function() {
                login = "";
                token = "";
                $window.sessionStorage.removeItem("login");
                $window.sessionStorage.removeItem("token");
            }
        }
    }
);