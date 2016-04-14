"use strict";

// Declare app level module which depends on views, and components
angular.module("myApp", [
  "ngRoute",
  "myApp.catControl",
  "myApp.catService",
  "myApp.focusDirective",
  "myApp.saveDirective",
  "myApp.imagePreviewDirective",
  "myApp.voteButtonsDirective"
])

.config(["$routeProvider", function($routeProvider) {
  $routeProvider.otherwise({
    redirectTo: "/cats"
  });
}]);
