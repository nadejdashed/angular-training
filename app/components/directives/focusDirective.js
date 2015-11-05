(function(module){

    var focus = function(){
        return {
            link: function (scope, element, attrs) {
                element[0].focus();
            }
        }
    };

    module.directive("focus", focus);

})(angular.module("app"))