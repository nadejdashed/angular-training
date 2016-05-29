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

                // todo: unsubscribe from the event in order not to introduce memory leaks on scope destroy
                $document.on('keydown', function(ev) {
                    if (ev.keyCode != 13) return;

                    $scope.action();
                });
            }
        };
    });
