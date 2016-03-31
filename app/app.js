for (var i=0;i<40000000;i++){}

(function () {
    "use strict";
    var module = angular.module("app", ['ngResource', 'ngCookies']).config(function(eventsSelectionProvider, eventsCount, $provide, $httpProvider){
        eventsSelectionProvider.setCount(eventsCount);
        $httpProvider.defaults.cache = false;
        
        $provide.decorator('$log', function($delegate){
            var warn = $delegate.warn;
            $delegate.warn = function(message){
                alert(message);
                warn.apply($delegate, arguments);
            };
            return $delegate;
        })
    });
    
    module.constant('eventsCount', 5);
})();
