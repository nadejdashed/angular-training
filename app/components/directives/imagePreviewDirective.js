(function(module) {
    "use strict";

    module.directive("imagePreview", imagePreviewDirective);

    function imagePreviewDirective() {
    	return {
    		restrict: "E",
            require: "ngModel",
            scope: {
                imageSrc: "=ngModel"
            },
    		templateUrl: "/app/components/directives/imagePreview.tmpl.html",
    	}
    }

}(angular.module("app")));