(function(module) {

    var imagePreviewDirective = function () {

        return {
            restrict: "E",
            templateUrl: 'templates/imagePreview.html',
            scope: {
                imageURL: '=imageUrl'
            }
        }
    }

    module.directive("imagePreviewDirective", imagePreviewDirective);

}(angular.module("app")));
