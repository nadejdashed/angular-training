(function(module) {

    module.directive("myFocus", function() {
      return {
          restrict: 'A',
          link: function(scope, element, attrs) {
            element[0].focus();
        } 
      }
    });

}(angular.module("app")));