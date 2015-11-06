(function(module) {

    var mainController = function ($scope) {
        var picPath = './pic/';
        $scope.cats = [
            {
                name: 'Pushok',
                src:  picPath + '1.jpg',
                clickQuantity: 0
            },
            {
                name: 'Dymok',
                src: picPath + '2.jpg',
                clickQuantity: 0
            }
        ];
        $scope.getIncrement = function (obj) {
            return obj.clickQuantity += 1;
        };
    };

    module.controller("mainController", mainController);

}(angular.module("app")));