(function(module) {

    var ngRegister = function () {

      return {
        restrict: 'EA',
        templateUrl: '/templates/register.html'
      };
    };

    module.directive('ngRegister', ngRegister);

}(angular.module("reg")));
