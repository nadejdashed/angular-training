angular.module('app').directive("imagePreview", function() {
    return {
        templateUrl: '/templates/imagePreview.html',
        scope: {
            source: '='
        }
    };
});