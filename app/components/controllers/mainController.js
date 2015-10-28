(function(module) {

    var mainController = function ($scope, catFactory, authService, cats, $location, $uibModal) {
/*
        $scope.cats =[
            {name: 'Tom', counter: 1, src: 'https://pbs.twimg.com/media/CN4GOm8WwAAgqy8.jpg'},
            {name: 'Sam', counter: 1, src: 'https://pbs.twimg.com/media/COgpmugWwAAaIwM.jpg:thumb'},
            {name: 'Ted', counter: 1, src: 'https://pbs.twimg.com/media/COhS32EWsAAhedf.jpg'},
            {name: 'Samuel', counter: 1, src: 'https://pbs.twimg.com/media/COgpmugWwAAaIwM.jpg'},
            {name: 'Samanta', counter: 1, src: 'https://pbs.twimg.com/media/COcyfkBUAAAdSAJ.jpg'}
        ];
*/

/*
        catFactory.getListOfCats().then(function(data) {
            $scope.cats = data;
        }, function(){});
*/
        $scope.cats = cats;

        $scope.editCat = function(cat) {
/*            $scope.vievedCat = cat;*/
/*            cat.checked = true;*/
            $location.url('/editCat/'+cat.id);
        };

        $scope.showCatProfile = function(cat) {
/*            $scope.vievedCat = cat;*/
            cat.checked = true;
            $location.url('/catProfile/' + cat.id);
        };

        $scope.submitSearch = function() {
            $scope.searchResult = angular.copy($scope.query);
        };

        $scope.deleteCat = function(cat)  {

            var modalInstance = $uibModal.open({
                templateUrl: '/templates/modal/delete.html',
                controller: 'modalDeleteCtrl',
                resolve: {
                    item: function () {
                        return cat;
                    }
                }

            });

            modalInstance.result.then(function() {
                catFactory.deleteCat(cat);
            }, function() {
                console.log('canceled');
            });

/*
            catFactory.deleteCat(cat).then(function() {
                alert('Cat Deleted');
            }, function(){});
*/
        };

        $scope.ifCatBelongToUser = function(cat) {
/*            var logedUser = userFactory.getLogedUser();*/
            var logedUser = authService.getLogedUser();

            if(logedUser) {
                return cat.owner == logedUser.login;
            } else {
                return false;
            }
        };

    };

    module.controller("mainController", mainController);

}(angular.module("app")));