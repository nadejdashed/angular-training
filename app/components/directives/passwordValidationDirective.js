/**
 * Created by vv on 23.10.2015.
 */
angular.module("app").directive('passwordValidation', function() {
    return {
        restrict :'AE',
        require: '^ngModel',
        link: function(scope, element, attrs, ngModelCtrl) {
            ngModelCtrl.$validators.validCharacters = function(modelValue, viewValue) {
                var value = modelValue || viewValue;
                return /[0-9]+/.test(value) &&
                    /[a-z]+/.test(value) &&
                    /[A-Z]+/.test(value);
            }
        }
    }
});
