angular.module('app').directive('ngSubmit', function($parse, $document){
    return {
        link: function(scope, elem, attr){
            var fn = $parse(attr.ngSubmit);

            $document.on('keydown', function(ev){
                if (ev.keyCode === 13){
                    scope.$apply(function(){
                        fn(scope, {$event: ev});
                    });
                }
            });
        }
    };
});