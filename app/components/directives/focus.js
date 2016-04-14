(function(module) {

    var focus = function () {
        var directive = {};
        directive.restrict = 'A';

        directive.link = function($scope, element) {
            element.focus();
        };
        return directive;
    };
    
    module.directive("focus", focus);

}(angular.module("app")));