'use strict';
eventsApp.controller('LoginController',
    function LoginController($scope, $location, authService) {
        
        $scope.login = function(user, form) {
            if (form.$valid){
                authService.login({
                    name: user.name,
                    password: user.password
                }).then(function(data){
                    $location.replace();
                    $location.url('/events');
                });    
            }
        };
        
        $scope.cancel = function() {
            $location.url('/');
        };
    });