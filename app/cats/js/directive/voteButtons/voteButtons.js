"use strict";

angular.module("myApp.voteButtonsDirective", [])

.directive("voteButtons", function() {
  return {
    restrict: "E",
    scope: {
      cat: "=cat"
    },
    link: function(scope, element, attrs) {
      scope.incVotes = function(cat) {
        cat.votes++;
      }
      scope.decVotes = function(cat) {
        cat.votes--;
      }
    },
    templateUrl: "cats/js/directive/voteButtons/voteButtons.html"
  }
});
