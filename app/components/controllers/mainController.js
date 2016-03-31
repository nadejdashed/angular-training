(function(module) {

    var mainController = function ($scope, $timeout) {
        this.text = "Hello World?";
        this.regex = '\\d+';
        
        $timeout(function(){
            $scope.$broadcast('event1');
        }, 0);        
    };

    module.controller("mainController", mainController);

}(angular.module("app")));