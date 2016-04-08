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
                //console.log($document);

                $document.on('keydown', function(ev) {
                    if (ev.keyCode != 13) return;

                    //debugger;
                    //element.submit();
                    $scope.action();
                    //element.find('button').trigger('click');

                });
            }
        };
    });
