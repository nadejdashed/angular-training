(function(module) {

    // TODO First time I see such definition of the directive. It's not suitable to read (but I can be wrong and it may depends on project)
    // Better return {
    //     scope: ....,
    //     restrict: ... 
    // }
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