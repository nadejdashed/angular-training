'use strict';

eventsApp.directive('upvote', function() {
    return {
        restrict: 'E',
        templateUrl: '/templates/directives/upvote.html',
        replace: true,
        scope: {
            upvote: "&",
            downvote: "&",
            count: "="
        }

    }
});
