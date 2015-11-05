/**
 * Created by Pavlo_Oliinyk1 on 11/5/2015.
 *
 *
 * Create “voteSpinner” directive and make corresponding changes to the pages that use it.
 */

angular.module('app')
    .directive('voteSpinner', function(){
        return {
            restrict: 'A',
            scope: {
                voteVal: '@'
            },
            templateUrl: 'templates/templatesDirectives/spinnerButtons.html',
            link: function(scope, elem, attrs, ctrl, transcludeFn) {
                console.log('voteVal is: ', scope.voteVal );

                //console.log('scope' , scope,'elem', elem, 'attrs' ,attrs, 'ctrl' ,ctrl);
            }
        }
    });
