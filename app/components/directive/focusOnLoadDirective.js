/**
 * Created by Pavlo_Oliinyk1 on 11/5/2015.
 *
 * Create a “focus” directive, which when placed on an input element, causes that element to
 * receive the focus when a page first loads.
 */

angular.module('app')
    .directive('focusOnLoad', function(){
       return{
           restrict: 'A',
           link: function(scope,elem,attr,ctrl){
               console.log('focus elem',elem);
               elem[0].focus();

           }
       }

    });
