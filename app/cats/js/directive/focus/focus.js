"use strict";

angular.module("myApp.focusDirective", [])

.directive("focus", function() {
  return {
    restrict: "A",
    link: function(scope, element, attrs) {
      element[0].focus();
    }
  }
});
