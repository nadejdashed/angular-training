'use strict';

eventsApp.directive('eventThumbnail', function() {
    return {
        restrict: 'E',
        templateUrl: '/templates/directives/eventThumbnail.html',
        scope: {
            event: "="
        }

    }
});
