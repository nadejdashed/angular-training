(function(module) {

    module.directive('myDirective', function() {
    return {
        link: function(scope, el, attr) {
            el[0].focus();
        }
    }
    })
}(angular.module("app")));