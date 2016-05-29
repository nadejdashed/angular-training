"use strict";

angular.module("myApp.saveDirective", [])

.directive("save", function($document) {
  return {
    restrict: "A",
    scope: {
      save: "&"
    },
    link: function(scope, element, attrs) {
      // todo: please unsubscribe from the events on scope destroy,
      // otherwise, it will introduce memory leak on view change
      $document.bind("keydown keypress", function(event) {
        if (event.which === 13) {
          // todo: check if $document.bind already wraps the fn with $apply
          // scope.$apply(function() {
            scope.save();
          // });
          event.preventDefault();
        }
      });
    }
  }
});
