(function(module) {



    var onFocus = function ()
    {

        return {
            strict: 'A',
            link: function($scope, element, attributes, controller)
            {
                element[0].focus();
            }

        }
    }
    module.directive("onFocus", onFocus);

}(angular.module("app")));