/**
 * Created by vv on 16.10.2015.
 */
angular.module("app").directive('focusMe', function() {
    return {
        restrict :'A',
        link: function(scope, element, attrs) {
            var elem = element[0];
            elem.focus();
        }
    }
});


angular.module("app").directive('ngClick', function($parse, $document) {
    return {

        link: function(scope, elem, attr) {
            var saveCat = $parse(attr.ngClick),
                formName = attr.name;

            $document.on('keydown', function(ev) {
                if (ev.keyCode === 13 && scope.catForm.$valid){
                    ev.preventDefault();
                    scope.$apply(function(){
                        saveCat(scope, {$event: ev});
                    })
                }

            });
        }
    }
});