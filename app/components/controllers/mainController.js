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
            },
            {
                name: 'Tom',
                src:  picPath + '3.jpg',
                clickQuantity: 0
            },
            {
                name: 'Snowball',
                src:  picPath + '4.jpg',
                clickQuantity: 0
            },
            {
                name: 'Gremm',
                src: picPath + '5.jpg',
                clickQuantity: 0
            }
        ];
        $scope.selectedCat = $scope.cats[1];

        $scope.getIncrement = function (obj) {
            return obj.clickQuantity += 1;
        };
        $scope.selectThis = function (obj) {
            $scope.selectedCat = obj;
        };
    };

    module.controller("mainController", mainController);

}(angular.module("app")));