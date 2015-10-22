(function(module){

    var focusDirective=function() {
        return {
            link: function (scope, element, attrs) {
                 element[0].focus();
            }
        };
    }
        module.directive('focusDirective', focusDirective);

}(angular.module('app')));