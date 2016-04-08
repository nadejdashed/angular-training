'use strict';

angular.module('myApp')
    .directive('enter', function () {
        return {
            restrict: 'A',
            scope: {
                action: '&enter'
                // destroy
            },
            link: function ($scope, element, attrs) {
                //console.log("ha");

                element.on('keydown', function(ev) {
                    if (ev.keyCode != 13) return;

                    debugger;
                    //element.submit();
                    $scope.action();
                    //element.find('button').trigger('click');

                });
            }
        };
    });
