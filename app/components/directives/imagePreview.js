(function(module) {

    var imagePreview = function () {
        return {
            restrict: 'E',
            scope: {
                src: '='
            },
            templateUrl: 'app/templates/image-preview.html'
        };
    };

    module.directive("imagePreview", imagePreview);

}(angular.module("app")));