(function(module) {

    var enterKeyDetectorDirective = function ($document, $parse) {
        return {
            restrict: "A",
            link: {
                post: function (scope, elem, attrs, ctrls) {
                    //var functionToCallSubmit = $parse(attrs.ngSubmit);
                    $document.on('keydown', function(e) {
                        // on the keydown event, call my function
                        // and pass it the keycode of the key
                        // that was pressed
                        // ex: if ENTER was pressed, e.which == 13
                        if(e.which == 13) {
                            elem[0].click();
                            //functionToCallSubmit(scope);
                        }
                    });
                }
            }
        }

    };

    module.directive("enterKeyDetectorDirective", enterKeyDetectorDirective);

}(angular.module("app")));