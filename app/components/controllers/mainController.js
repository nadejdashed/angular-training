(function(module) {

    var mainController = function ($scope, $filter) {
        var picPath = './pic/';
        $scope.cats = [
            {
                name: 'rr',
                src:  picPath + '1.jpg',
                votes: 0
            },
            {
                name: 'Dymok',
                src: picPath + '2.jpg',
                votes: 0
            },
            {
                name: 'Tom',
                src:  picPath + '3.jpg',
                votes: 0
            },
            {
                name: 'Snowball',
                src:  picPath + '4.jpg',
                votes: 0
            },
            {
                name: 'Gremm',
                src: picPath + '5.jpg',
                votes: 0
            }
        ];

        $scope.orders = [
            {label: 'By name', value: 'name'},
            {label: 'By name (Reverse)', value: '-name'},
            {label: 'By path', value: 'src'},
            {label: 'By path (Reverse)', value: '-src'},
            {label: 'By votes', value: 'votes'},
            {label: 'By votes (Reverse)', value: '-votes'}
        ];

        $scope.selectedCat = $scope.cats[1];

        $scope.selectThis = function (obj) {
            $scope.selectedCat = obj;
            obj.viewed = true;
        };

        $scope.findCat = function () {
            $scope.cats = $filter($scope.name)($scope.cats);
        };

        $scope.setFilter = function (obj) {
            debugger;
            if (typeof obj === 'object'){
                $scope.order = obj.value;
            } else {
                $scope.searchFilter = obj;
            }
        };
    };

    module.controller("mainController", mainController);

}(angular.module("app")));