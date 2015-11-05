(function () {
    "use strict";
    angular.module("app", ["ngSanitize", "ngResource", 'ui.bootstrap', 'ngMessages'])
      .config(function(selectedEventsServiceProvider, constants, $provide){
          constants.COUNT_SELECTED = 5;
          selectedEventsServiceProvider.setCountSelectedEvents(constants.COUNT_SELECTED);

          $provide.decorator('$log', function ($delegate) {
              var swap = function (originalFn) {
                  return function (value) {
                      originalFn('temp !!!! ', value);
                  };
              };

              $delegate.warn = swap($delegate.warn);
              $delegate.error = swap($delegate.error);

              return $delegate;
          });

      });
})();
