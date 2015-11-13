(function(module) {

    module.factory("authService",function($http, userService, catsService){

        function registration(data){

            return $http.post('/register', data).then(function(response){

                return response;
            });
        }

        function login(data){

            return $http.post('/auth', data).then(function(response){

                var responseToken = response.data.token;
                if (responseToken){
                    userService.setToken(responseToken);
                }

                return response;
            });
        }

        return {
            login: login,
            registration: registration
        }

    });

}(angular.module("app")));
