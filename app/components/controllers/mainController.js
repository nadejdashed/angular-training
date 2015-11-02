(function(module) {

    var mainController = function ($scope) {
        $scope.cats = [{name:'John', image:'Artefacts/cat1.jpeg', clickedCount:0},
            {name:'Mary', image:'Artefacts/cat2.jpeg', clickedCount:0},
            {name:'Mike', image:'Artefacts/cat3.jpeg', clickedCount:0},
            {name:'Adam', image:'Artefacts/cat4.jpeg', clickedCount:0},
            {name:'Julie', image:'Artefacts/cat5.jpeg', clickedCount:0}];
        $scope.selectedCat = $scope.cats[0];
        $scope.didClickOnCat = function (cat) {
            cat.clickedCount++;
        };
        $scope.didSelectCat = function (cat) {
            $scope.selectedCat = cat;
        };
    };

    module.controller("mainController", mainController);

}(angular.module("app")));