'use strict';
eventsApp.controller('MainMenuController',
    function MainMenuController($scope, $location, authService) {
        $scope.createEvent = function() {
            $location.replace();
            $location.url('/newEvent');
        };
        $scope.logout = function() {
            authService.logout();
            $location.url('/');
        };
        
        $scope.$watch(authService.getUser, function(data){
            $scope.user = data;
        });
    });