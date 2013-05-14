'use strict';

eventsApp.controller('TestMeController',
    function TestMeController($scope) {
        $scope.index = 0;
    });

eventsApp
    .directive('testme', function() {
        return {
            restrict: 'E',
            replace: true,
            transclude: true,
            template: "<div>umm{{index}} <div ng-transclude></div> </div>",
            controller: "TestMeController",
            link: {
                post: function(scope, element, attrs, controller) {
                    scope.index++;
                }
            }
        };
    });