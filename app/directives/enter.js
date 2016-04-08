'use strict';

angular.module('myApp')
    .directive('enter', function ($document) {
        return {
            restrict: 'A',
            scope: {
                action: '&enter'
                // destroy
            },
            link: function ($scope, element, attrs) {

                $document.on('keydown', function(ev) {
                    if (ev.keyCode != 13) return;

                    $scope.action();
                });
            }
        };
    });
