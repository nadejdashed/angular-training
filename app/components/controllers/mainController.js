(function(module) {

    var mainController = function ($scope, $http, $resource, catService) {
        $scope.cats = catService.getCats();

        $scope.addVote = function addVote(cat) {
            cat.vote += 1;
        };
        
        $scope.decreaseVote = function(cat) {
            cat.vote -= 1;
        };
        
        $scope.chosenCat = {};
        $scope.chooseCat = function chooseCat(cat) {
            $scope.chosenCat = cat;
        };
        
        $scope.setFilter = function(searchText) {
            $scope.catFilter = {name:searchText};
        };

        $scope.setOrder = function(order) {
            $scope.order = order;
        };
    };
    
    module.controller("mainController", mainController);

}(angular.module("app")));