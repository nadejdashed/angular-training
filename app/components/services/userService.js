(function(module) {

    module.service("userService", function($window){

        var token = $window.sessionStorage.getItem('token');

        var catForDelay = $window.sessionStorage.getItem('catForDelay');

        return {
            getToken: function(){
                return token;
            },
            setToken: function(t){
                token = t;
                $window.sessionStorage.setItem('token', t);
            },
            setCatForDelay: function(cat){

                catForDelay = cat;
                $window.sessionStorage.setItem('catForDelay', cat);
            },
            getCatForDelay: function () {
                return catForDelay;
            }
        }
    });

}(angular.module("app")));

