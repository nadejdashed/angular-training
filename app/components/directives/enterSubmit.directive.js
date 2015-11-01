angular.module("app").directive("enterSubmit", function($document, $parse){
    return {
        restrict: "A",
        link: function(scope, element, attrs) {
            fn = $parse(attrs.ngClick);
            $document.on('keypress', function(evt){
                if (evt.charCode == 13) {
                    event.preventDefault();
                    event.stopPropagation();
                    scope.$apply(function(){
                        fn(scope);
                    })
                }
            });
        }
    }
});