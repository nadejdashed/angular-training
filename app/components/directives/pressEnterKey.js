(function(module) {

    var pressEnterKey = function ($document) {
        return  {
            restrict : 'A',

            link : function($scope, element) {
                $document.on('keypress', function (ev) {
                    var keyCode = (ev.keyCode ? ev.keyCode : ev.which);
                    if (keyCode == '13') {
                        element.submit();
                        //TODO get attr ng-submit and run it
                    }
                });
            }
        }
    };

    module.directive("pressEnterKey", pressEnterKey);

}(angular.module("app")));