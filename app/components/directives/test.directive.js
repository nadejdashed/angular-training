(function(module) {

    var testDirective = function () {
        return {
            restrict: 'A',
            scope: {
                text: '@value',
                text2: '=',
                value2: '=',
                fn: '&'
            },
            transclude: true,
            controller: function($scope){

                /*console.log('controller 2');*/

                $scope.text2 = 'Child';
                $scope.value2.temp = 'a';
                $scope.fn();
            },
            templateUrl: '/templates/test.html'
        };
    };

    module.directive("testDirective", testDirective);

}(angular.module("app")));