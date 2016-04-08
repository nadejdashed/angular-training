
var myModule = angular.module('app');

    myModule.directive('focus', function() {
        var directive = {};

        directive.restrict = 'A'; 

        directive.link = function($scope, element, attributes) {
                element[0].focus();
                
        }

        return directive;
    })