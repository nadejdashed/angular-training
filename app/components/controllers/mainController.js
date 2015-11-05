(function(module) {

    var mainController = function ($scope) {
        $scope.text = "Hello World!";
        $scope.order = "name";
        $scope.cats =
            [{count: 0, name: 'Tru cat', image:"images/cat1.jpg", isshowed:false},
            {count: 0, name: 'Clever cat', image:"images/cat2.jpg", isshowed:false},
            {count: 0, name: 'Red cat', image:"images/cat3.jpg", isshowed:false},
            {count: 0, name: 'Bad cat', image:"images/cat4.jpg", isshowed:false},
            {count: 0, name: 'Old cat', image:"images/cat5.jpg", isshowed:false}];
        $scope.orders =
            [{name:"Ascending", type:"name"},
             {name:"Descending", type:"-name"}];
        $scope.selectedCat = $scope.cats[0];
        $scope.clickHandler = function (object) {
            debugger;
            object.isshowed = true;
            $scope.selectedCat = object;
        };
        $scope.searchClickHandler = function (object) {
            debugger;
            $scope.searchTerm = angular.copy(object);
        };
        $scope.imageClickHandler = function (object) {
            debugger;
            object.count+=1;
        };
        $scope.imageClickHandlerUp = function (object) {
            debugger;
            object.count+=1;
        };
        $scope.imageClickHandlerDown = function (object) {
            debugger;
            object.count-=1;
        };
    };

    module.controller("mainController", mainController);

}(angular.module("app")));