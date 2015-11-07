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
                //cat: '=',
                voteCallback: '&',
                voteVal: '=', //не понятно на каком коте нажато
            },
            controller :'mainController',
            templateUrl: 'templates/templatesDirectives/spinnerButtons.html',
            link: function(scope, elem, attrs, ctrl, transcludeFn) {
                //console.log('voteVal is: ', scope.voteVal);

                scope.decVote = function decVote(voteInt){
                    voteInt -= 1;
                    scope.voteCallback( {voteInd: voteInt} );
                    //console.log('decVote ', voteInt);
                };

                scope.incVote = function incVote(voteInt){
                    voteInt += 1;
                    //console.log('incVote pressed ', voteInt);
                    scope.voteCallback( {voteInd: voteInt} );
                };

            }
        }
    });
