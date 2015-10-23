(function(module) {
  "use strict";

  var repeatPassword = function () {
    return {
      require: "ngModel",
      scope: {
        compareTo: "="
      },
      link: function(scope, element, attributes, ngModel) {

        ngModel.$validators.compareTo = function(modelValue, viewValue) {
          var value = modelValue || viewValue;
          // console.log(value, scope.compareTo, value == scope.compareTo);
          return value == scope.compareTo;
        };

        scope.$watch("compareTo", function() {
          ngModel.$validate();
        });

      }
    };

  };

  module.directive('repeatPassword', repeatPassword);

}(angular.module("reg")));
