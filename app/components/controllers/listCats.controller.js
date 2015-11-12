angular.module("app").controller("listCatsController",
    function ($scope, $cookies, $filter, $uibModal, catsService, selectedCat) {

        var didSelectCatFunction = function (cat) {
            $scope.selectedCat = cat;
            if (cat) {
                cat.wasAlreadyViewed = true;
            }
            //$state.go('listView.vote', {id : cat.id});
        };

        var applyFilter = function (newFilterText) {
            $scope.filterText = newFilterText;
        };

        var clearFilter = function () {
            $scope.newFilterText="";
            applyFilter("");
        };

        clearFilter();

        catsService.getCatsPromise()
            .then(function(data) {
                $scope.cats = data;
                if (selectedCat) {
                    didSelectCatFunction(selectedCat);
                } else {
                    didSelectCatFunction($scope.cats[0]);
                }
            });

        $scope.applyFilter = applyFilter;

        $scope.clearFilter = clearFilter;

        $scope.didSelectCat = didSelectCatFunction;

        $scope.deleteCat = function (cat) {
            var modalInstance = $uibModal.open({
                templateUrl: '/templates/modalMessage.html',
                controller: 'modalMessageController',
                resolve: {
                    titleContent: function () {
                        return "Confirm delete";
                    },
                    bodyContent: function () {
                        return 'You want to delete cat#'+cat.id+': "'+cat.name+'".<br>Are you sure?';
                    },
                    buttonsNames: function () {
                        return {
                            ok: "Yes",
                            cancel: "No"
                        }
                    },
                    data: function () {
                        return cat;
                    }
                }
            });

            modalInstance.result.then(function (cat) {
                catsService.deleteCatPromise(cat)
                    .then(function(cat) {
                        var index = $scope.cats.map(function(catItem) {
                            return catItem.id;
                        }).indexOf(cat.id);
                        if (index>=0) {
                            $scope.cats.splice(index, 1);
                            if (index>$scope.cats.length) {
                                index = $scope.cats.length - 1;
                            }
                        }
                        didSelectCatFunction($scope.cats[index]);
                    });
            }, function () {
                //$log.info('Modal dismissed at: ' + new Date());
            });
        };
    }
);