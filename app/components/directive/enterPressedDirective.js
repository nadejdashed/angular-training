/**
 * Created by Pavlo_Oliinyk1 on 11/5/2015.
 *
 * Create a directive that allows the save button to be clicked whenever the enter key is
 * pressed on the “addCat” page.
 *
 * Combine the image and url input on the “addCat” page into custom “imagePreview” directive.
 *
 * Create “voteSpinner” directive and make corresponding changes to the pages that use it.
 */

angular.module('app')
    .directive('enterPressed', function($parse , $document){
        return {
            restrict: 'A',
            link: function($scope, elem, attrs, ctrl, transcludeFn) {

                var abstractFn = $parse(attrs.ngClick);
                //console.log('abstractFn(that parse ngClick) ', abstractFn  );

                $document.on('keypress', function(event){
                    //console.log('keypresseed "elem.on" evnet: ',event );
                    event.preventDefault();
                    if(event.keyCode === 32 || event.keyCode === 13 ){
                        abstractFn ($scope);
                    }
                });
            }
        }
    });
