(function(module) {

    var imagePreview = function () {
        return {
            restrict: "E",
            templateUrl: "templates/imagePreview.html",
            scope: {
                cat: '='
            }
        };
    };

    module.directive("imagePreview", imagePreview);

}(angular.module("app")));