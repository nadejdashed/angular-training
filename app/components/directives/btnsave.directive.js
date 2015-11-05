/**
 * Created by Ievgen_Budnikov on 11/5/2015.
 */
(function(module) {

    var enterPress = function ($document, $parse) {

        return {
            scope: true,
            restrict: 'A',
            link: function(scope, element, attrs) {
                var call = $parse(attrs.ngClick);
                $document.on('keydown',  function(event){
                    if (event.which === 13){
                        call(scope);
                    }
                });
            }
        };
    };

    module.directive("enterPress", enterPress);

}(angular.module("app")));