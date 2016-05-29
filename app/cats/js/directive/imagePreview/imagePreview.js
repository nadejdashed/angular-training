"use strict";

angular.module("myApp.imagePreviewDirective", [])

.directive("imagePreview", function() {
  return {
    restrict: "E",
    scope: {
      // todo: shorten it to
      // newCat: "="
      newCat: "=newCat"
    },
    templateUrl: "cats/js/directive/imagePreview/imagePreview.html"
  }
});
