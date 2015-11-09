(function(module) {

    module.factory("authenticationService",function($q, $http, $state, tokenService, displayExceptionService){

        function checkIfError(status, message){
            if (status === "error"){
                displayExceptionService.displayException(message);
            }
            else {
                $state.go('cats');
            }
        }

        function registration(data){
            return $http.post('/register', data).then(function(response){
                checkIfError(response.data.status, "Registration failed");
            });
        }

        function login(data){
            return $http.post('/auth', data).then(function(response){
                var respToken = response.data.token;
                if (respToken){
                    tokenService.setToken(respToken);
                }
                checkIfError(response.data.status, "Login failed");
            });
        }

        return {
            login: login,
            registration: registration
        }

    });

}(angular.module("app")));