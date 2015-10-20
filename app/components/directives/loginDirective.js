(function(module) {
    "use strict";

    var ngLogin = function () {

      return {
        restrict: 'EA',
        templateUrl: '/templates/login.html'
      };
    };

    module.directive('ngLogin', ngLogin);

}(angular.module("reg")));
