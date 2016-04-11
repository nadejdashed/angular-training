(function(module){
    module.directive("enterKey", function(){
        return {
            restrict: "A",
            link: function(scope, element, attrs) {
                angular.element(document).on('keypress', function(e) {
                    if (e.keyCode == 13) {
                        element[0].click();
                    }
                });
            }
        };
    });
})(angular.module("app"));