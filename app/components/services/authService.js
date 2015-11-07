(function(module) {

    module.factory("authService",function($http, userService){
        function registration(data){
            return $http.post('/register', data).then(function(){

            });
        }

        function login(data){
            return $http.post('/auth', data).then(function(response){
                var responseToken = response.data.token;
                if (responseToken){
                    userService.setToken(responseToken);
                }
            });
        }

        return {
            login: login,
            registration: registration
        }

    });

}(angular.module("app")));
