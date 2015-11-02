(function(module) {

    var mainController = function ($scope) {
        $scope.text = "Hello World!";
        $scope.images = [
            { name: 'stu',
              img:'http://25.media.tumblr.com/tumblr_lncvc9SMfW1qbe5pxo1_500.jpg',
              clicks: 0},

            { name: 'dru',
              img:'http://www.factslides.com/imgs/black-cat.jpg',
              clicks: 0}];

        $scope.counterTotal = 0;
        $scope.incCounterPicture = function(_index){
            $scope.images[_index].clicks++;
            console.log('hit btn['+_index+']', $scope.counter);
            //
            $scope.counterTotal++;
            return $scope.images[_index].clicks;
        };
    };

    module.controller("mainController", mainController);

}(angular.module("app")));