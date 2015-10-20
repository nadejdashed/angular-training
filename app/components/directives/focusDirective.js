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

    var ngSubmit = function () {
      return {
        restrict: 'A',
        link: function(scope, elem, attr) {
          elem.bind("keydown", function(event) {
            if (event.keyCode === 13 && scope.addLangForm.$valid) {
              scope.$apply(function(){
                  scope.$eval(attr.ngSubmit, {'event': event});
              });

              event.preventDefault();
            }
          });

        }
      };
    };

    module.directive('ngSubmit', ngSubmit);

}(angular.module("app")));
