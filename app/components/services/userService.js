(function(module) {

    module.service("userService", function($window){
        var token = $window.sessionStorage.getItem('token');

        return {
            getToken: function(){
                return token;
            },
            setToken: function(t){
                token = t;
                $window.sessionStorage.setItem('token', t);
            }
        }
    });

}(angular.module("app")));

