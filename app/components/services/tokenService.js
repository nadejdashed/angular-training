(function(module) {

    module.service("tokenService", function($window){

        var token = $window.sessionStorage.getItem('cat_token');

        return {
            getToken: function(){
                return token;
            },
            setToken: function(data){
                token = data;
                $window.sessionStorage.setItem('cat_token', data);
            }
        }

    });

}(angular.module("app")));