'use strict';

eventsApp.controller('EventListController',
    function EventListController($scope, $location, eventData, $sce) {
        $scope.header = '<span style="color:white">Events</span>';
        $scope.header = $sce.trustAsHtml($scope.header);

        $scope.subheader = '<span style="color:white">List of the nearest events:</span>';
        
        $scope.events = eventData.getAllEvents();
    }
);

