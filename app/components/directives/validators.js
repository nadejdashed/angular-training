(function(module) {

    module.directive('strongPass', function () {
        var isValidPassword = function(s) {
            return s && s.length > 5 && /\D/.test(s) && /\d/.test(s) && /[0-9]/.test(s);
        };

        return {
            restrict: 'A',
            require:'ngModel',
            link:function (scope, elm, attrs, ngModelCtrl) {
                ngModelCtrl.$parsers.unshift(function (viewValue) {
                    ngModelCtrl.$setValidity('strongPass', isValidPassword(viewValue));
                    return viewValue;
                });
            }
        };
    });

    module.directive('usernameValid', function () {
        var isValidUserName = function(s) {
            return s &&  /^[a-zA-Z0-9]+$/.test(s);
        };
        return {
            restrict: 'A',
            require:'ngModel',
            link:function (scope, elm, attrs, ngModelCtrl) {
                ngModelCtrl.$parsers.unshift(function (viewValue) {
                    ngModelCtrl.$setValidity('usernameValid', isValidUserName(viewValue));
                    return viewValue;
                });
            }
        };
    });

   
    module.directive('equals', function() {
        return {
            restrict: 'A',
            require: '?ngModel',
            link: function(scope, elem, attrs, ngModel) {
                if(!ngModel) return;
                scope.$watch(attrs.ngModel, function() {
                    validate();
                });
                attrs.$observe('equals', function (val) {
                    validate();
                });

                var validate = function() {

                    var val1 = ngModel.$viewValue;
                    var val2 = attrs.equals;

                    ngModel.$setValidity('equals', ! val1 || ! val2 || val1 === val2);
                };
            }
        }
    });



}(angular.module("app")));