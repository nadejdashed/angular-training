(function(module) {

    var mainController = function ($scope, $http) {        
        $http.get('json/cats.json').success(function(data) {
            $scope.cats = data;
        });
        
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
    };
    
    module.controller("mainController", ['$scope', '$http', mainController]);

}(angular.module("app")));