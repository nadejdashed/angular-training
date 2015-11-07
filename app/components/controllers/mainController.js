(function(module) {

    var mainController = function ($scope) {
        var picPath = './pic/';
        $scope.cats = [
            {
                name: 'rr',
                src:  picPath + '1.jpg',
            },
            {
                name: 'Dymok',
                src: picPath + '2.jpg',
            },
            {
                name: 'Tom',
                src:  picPath + '3.jpg',
            },
            {
                name: 'Snowball',
                src:  picPath + '4.jpg',
            },
            {
                name: 'Gremm',
                src: picPath + '5.jpg',
            }
        ];
        $scope.selectedCat = $scope.cats[1];

        $scope.selectThis = function (obj) {
            $scope.selectedCat = obj;
            obj.viewed = true;
        };
    };

    module.controller("mainController", mainController);

}(angular.module("app")));