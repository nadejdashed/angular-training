/**
 * Created by Mykhaylo_Tauzhniansk on 11/5/2015.
 */
(function (module) {

    var keyPressDirective = function ($parse, $document) {

        return {
            scope: true,
            restrict: 'A',
            link: function(scope, element, attrs) {
                var functionToCall = $parse(attrs.ngClick);
                $document.on('keydown',  function(e){
                    console.log("key down! " + e.which);
                    if (e.which === 13){
                        console.log("ENTER key down! ");
                        functionToCall(scope);
                    }
                });
            }
        };
    };
    module.directive("keyPressDir", keyPressDirective);

}(angular.module("app")));