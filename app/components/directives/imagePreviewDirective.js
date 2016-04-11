(function(module) {
    module.directive("imagePreview", function() {
        return {
            restrict: "E",
            templateUrl: "/app/templates/image-preview.html",
            scope: {imageUrl: "="}
        };
    });
})(angular.module("app"));