"use strict";

angular.module("myApp.imagePreviewDirective", [])

.directive("imagePreview", function() {
  return {
    restrict: "E",
    scope: {
      newCat: "=newCat"
    },
    templateUrl: "cats/js/directive/imagePreview/imagePreview.html"
  }
});
