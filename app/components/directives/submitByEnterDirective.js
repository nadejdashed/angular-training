(function(module){

    var submitByEnter =  function ($document) {
        return function (scope, element, attrs) {
            $document.bind("keydown keypress", function (event) {
                var key = typeof event.which === "undefined" ? event.keyCode : event.which;
                if(key === 13) {
                    element[0].click();
                    event.preventDefault();
                }
            });
        };
    };

    module.directive('submitByEnter', submitByEnter);

})(angular.module("app"))