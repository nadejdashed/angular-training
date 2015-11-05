(function(module) {



    var mainController = function ($scope, catService ) {

        $scope.pride = [];
        var fillFirstCat = function()
        {
            if($scope.pride)
            {
                $scope.selectCat($scope.pride[0]);
            }

        };



        $scope.sortingOrders = [{name: "Most liked", predicate: "vote", reverse:true},
            {name: "Less liked", predicate: "vote", reverse:false},
            {name: "Most clicked", predicate: "clicksCount", reverse:true},
            {name: "Less clicked", predicate: "clicksCount", reverse:false}
        ];

        $scope.countClick = function (cat)
        {
            cat.clicksCount += 1;
        }

        $scope.selectCat = function (cat)
        {
            $scope.selectedCat = cat;
            cat.wasShown = true;
        }


        $scope.likeCat = function (cat)
        {
            cat.lastvoted = Date.now();
            catService.positiveVote(cat);
        }


        $scope.unlikeCat = function (cat)
        {
            cat.lastvoted = Date.now();
            catService.negativeVote(cat);
        }

        $scope.filterCats = function (searchTerm)
        {
            $scope.currentSearchTerm = searchTerm;
        }


        $scope.positiveCatsStack =[];

        $scope.$watch('pride',function(newValue, oldValue){
            if(newValue)
            {
            for(var i = 0; i < newValue.length; i++)
            {
                if(newValue[i].vote > 0)
                {
                    if($scope.positiveCatsStack.indexOf(newValue[i]) < 0)
                    {
                        $scope.positiveCatsStack.push(newValue[i]);
                    }

                }
                else
                {
                    var index = $scope.positiveCatsStack.indexOf(newValue[i]);
                    if( index >= 0)
                    {
                        $scope.positiveCatsStack.splice(index,1);
                    }


                }

            }

            }
        }, true);




        $scope.currentSearchTerm = "";
        $scope.sortingOrder = $scope.sortingOrders[0];

        catService.getAllPromise().then(function(data)
        {
            $scope.pride = data;
            fillFirstCat();
        });
    };

    module.controller("mainController", mainController);

}(angular.module("app")));