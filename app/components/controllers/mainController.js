(function(module) {

    var mainController = function ($scope) {
        $scope.text = "Hello World!";
        $scope.images = ['http://25.media.tumblr.com/tumblr_lncvc9SMfW1qbe5pxo1_500.jpg',
                         'http://www.factslides.com/imgs/black-cat.jpg'];

        $scope.counter = 0;
        $scope.incCounterPicture = function(){
            $scope.counter++;
            console.log('hit btn',$scope.counter);
            return $scope.counter;
        };
    };

    module.controller("mainController", mainController);

}(angular.module("app")));