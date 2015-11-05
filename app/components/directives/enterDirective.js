(function(module) {

    var listenEnter = function ($document) {
        return {
            restrict: "A",
            link: function (scope, element) {
                $document.bind("keydown keypress", function (event) {
                    if(event.which === 13 && !element[0].disabled) {
                        event.preventDefault();
                        element[0].click();
                    }
                });
            }
        };
    };

    module.directive("listenEnter", listenEnter);

}(angular.module("app")));