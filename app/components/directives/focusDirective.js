(function(module) {
    "use strict";

    var ngFocus = function () {
      return {
        restrict: 'A',
        link: function(scope, elem, attr) {
          elem[0].focus();
        }
      };
    };

    module.directive('ngFocus', ngFocus);
    
}(angular.module("app")));
