(function(module) {

    var imagePreviewDirective = function () {
        return {
            restrict: "AE",
            templateUrl: "/templates/imagePreview.html"
        }
    };

    module.directive("imagePreview", imagePreviewDirective);

}(angular.module("app")));