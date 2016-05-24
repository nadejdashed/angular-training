(function(module){
    module.directive("enterKey", function(){
        return {
            restrict: "A",
            link: function(scope, element, attrs) {
                // todo: remove excess code, there is $document service already
                angular.element(document).on('keypress', function(e) {
                    if (e.keyCode == 13) {
                        element[0].click();
                    }
                });
                // memory leak!
                // todo: unsubscribe from the event on scope destroy
            }
        };
    });
})(angular.module("app"));