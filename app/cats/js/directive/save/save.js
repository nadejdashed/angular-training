"use strict";

angular.module("myApp.saveDirective", [])

.directive("save", function($document) {
  return {
    restrict: "A",
    scope: {
      save: "&"
    },
    link: function(scope, element, attrs) {
      $document.bind("keydown keypress", function(event) {
        if (event.which === 13) {
          scope.$apply(function() {
            scope.save();
          });
          event.preventDefault();
        }
      });
    }
  }
});
