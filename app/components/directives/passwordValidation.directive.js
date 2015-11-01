angular.module("app").directive("passwordValidation", function(){
    return {
        restrict: "A",
        require: "^ngModel",
        link: function(scope, element, attrs, ngModelCtrl) {
            ngModelCtrl.$validators.validCharacters = function(modelValue, viewValue) {
                var value = modelValue || viewValue;
                return /[0-9]+/.test(value) &&
                    /[a-z]+/.test(value) &&
                    /[A-Z]+/.test(value);
            };
        }
    }
});