(function(module) {

    var mainController = function ($scope) { // , mainService  --> add after $scope
        $scope.sort = "-name";

        $scope.cats = [
             {'name': 'Kitty', 'link': 'http://exmoorpet.com/wp-content/uploads/2012/08/cat.png', 'clickCount': 0, 'view': 1},
             {'name': 'Tom', 'link': 'https://pbs.twimg.com/profile_images/378800000532546226/dbe5f0727b69487016ffd67a6689e75a.jpeg', 'clickCount': 0, 'view': 0},
             {'name': 'TomGirl', 'link': 'http://wac.450f.edgecastcdn.net/80450F/hudsonvalleycountry.com/files/2015/01/cat4.jpg', 'clickCount': 0, 'view': 0},
             {'name': 'Fake', 'link': 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQOq6CS4Rr-BNM555IXm5mjFNNIAG9Pey-683HNbwnmzbYLob7R', 'clickCount': 0, 'view': 0},
             {'name': 'Tom13', 'link': 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRYuez70B3WmIBDgIn4Q0EfkaZc-rKW34Nxb6dilfz5HATFl9Xd', 'clickCount': 0, 'view': 0}
        ];

        $scope.selectedCat = $scope.cats[0];

        $scope.show = function (cat) {
            cat.view = 1;
            $scope.selectedCat = cat;
        };

        $scope.like = function (cat) {
            cat.clickCount += 1;
        };

        $scope.dislike = function (cat) {
            if(cat.clickCount > 0)
                cat.clickCount -= 1;
        };

        $scope.searchCatNameFilter = '';

        $scope.search = function(searchCatName){
            $scope.searchCatNameFilter = searchCatName;
        }
    };

    //mainController.$inject = ['$scope']; -- one of versions

    module.controller("mainController", mainController);

}(angular.module("app")));