'use strict';
eventsApp.controller('MainMenuController',
    function MainMenuController($scope, $location) {
        $scope.createEvent = function() {
            $location.replace();
            $location.url('/newEvent');
        };
    });