'use strict';
eventsApp.controller('MainMenuController',
    function MainMenuController($scope, $location, authService, $sce) {
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
        })
        
        $scope.data = '<span style="color:red">Temp text</span>';
        $scope.data2 = $sce.trustAsHtml($scope.data);
    });