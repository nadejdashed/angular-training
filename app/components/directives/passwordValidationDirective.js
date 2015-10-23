(function(module) {
  "use strict";

  var ngPassword = function () {

    return {
      require: "ngModel",
      link: function(scope, elem, attrs, ngModel) {
        if (!ngModel) return;

        ngModel.$validators.validCharacters = function(modelValue, viewValue) {
          var value = modelValue || viewValue;

          var pattern = /[0-9]+/.test(value) &&
                 /[a-z]+/.test(value) &&
                 /[A-Z]+/.test(value) &&
                 /\W+/.test(value);

          //console.log(value, pattern);
          return pattern;
        };

      }
    };
  };

  module.directive('ngPassword', ngPassword);

}(angular.module("reg")));
