'use strict';

angular.module('myApp')
    .directive('focus', function () {
        return {
            restrict: 'A',
            scope: {},
            link: function ($scope, element, attrs) {
                //console.log("ha");
                //debugger;
                element[0].focus();
            } 
        };
    });
