(function(module) {

    var voteController = function ($scope) {
        var didSelectcatFunction = function (cat) {
            $scope.selectedCat = cat;
            cat.wasAlreadyViewed = true;
        };

        $scope.cats = [
            {
                name:'John',
                image:'Artefacts/cat1.jpeg',
                vote:0,
                wasAlreadyViewed:false
            },
            {
                name:'Mary',
                image:'Artefacts/cat2.jpeg',
                vote:0,
                wasAlreadyViewed:false
            },
            {
                name:'Mike',
                image:'Artefacts/cat3.jpeg',
                vote:0,
                wasAlreadyViewed:false
            },
            {
                name:'Adam',
                image:'Artefacts/cat4.jpeg',
                vote:0,
                wasAlreadyViewed:false
            },
            {
                name:'Julie',
                image:'Artefacts/cat5.jpeg',
                vote:0,
                wasAlreadyViewed:false
            }
        ];

        $scope.voteUpForCat = function (cat) {
            cat.vote++;
        };

        $scope.voteDownForCat = function (cat) {
            cat.vote--;
        };

        $scope.applyFilter = function (newFilterText) {
            $scope.filterText = newFilterText;
        };

        $scope.didSelectCat = didSelectcatFunction;

        didSelectcatFunction($scope.cats[0]);
    };

    module.controller("voteController", voteController);

}(angular.module("app")));