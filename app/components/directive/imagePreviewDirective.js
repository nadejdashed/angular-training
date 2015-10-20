angular.module('app').directive('imagePreview', function() {
    return {
        restrict: 'E',
        templateUrl: '/app/templates/imagePreview.html',
        scope: {
            url: '=url'
        }
    };
});

