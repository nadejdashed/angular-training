(function(module) {



    var mainController = function ($scope) {

        $scope.pride = [{catName:"Hires", lastvoted:Date.now(), imageUrl:"http://catsnnov.ru/wp-content/uploads/2013/07/%D1%80%D1%8B%D0%B6%D0%B8%D0%B9-%D0%BA%D0%BE%D1%82.jpg", clicksCount: 0, wasShown: false, vote:0 },
            {catName:"Babur",lastvoted:Date.now(),  wasShown: false, imageUrl:"http://img0.joyreactor.cc/pics/post/%D0%BA%D0%BE%D1%82%D1%8D-%D0%BD%D0%B5-%D1%80%D0%B0%D1%81%D1%81%D1%82%D1%80%D0%B0%D0%B8%D0%B2%D0%B0%D0%B9%D1%82%D0%B5-%D0%BA%D0%BE%D1%82%D0%B0-%D0%BA%D0%B0%D1%80%D1%82%D0%B8%D0%BD%D0%BA%D0%B8-%D0%B4%D0%BE%D0%B1%D1%80%D0%BE%D1%82%D0%B0-266885.jpeg", clicksCount: 0, vote:0},
            {catName:"Samsa", lastvoted:Date.now(), wasShown: false , imageUrl:"http://infosmi.net/images/stories/articles/2013/Kuryozy/11-2013/10/70-1.jpg", clicksCount: 0,vote:0},
            {catName:"Barsik", lastvoted:Date.now(), wasShown: false , imageUrl:"http://cats-burg.ru/wp-content/uploads/2014/08/povedenie_kotov.jpg", clicksCount: 0,vote:0},
            {catName:"Murka", lastvoted:Date.now(), wasShown: false , imageUrl:"http://i.ytimg.com/vi/JbIs2LCGjSw/hqdefault.jpg", clicksCount: 0,vote:0},
        ];

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
            cat.vote +=1;
            cat.lastvoted = Date.now();
        }


        $scope.unlikeCat = function (cat)
        {
            cat.vote -= 1;
            cat.lastvoted = Date.now();
        }

        $scope.filterCats = function (searchTerm)
        {
            $scope.currentSearchTerm = searchTerm;
        }

        $scope.sortCats = function (sortingOrder)
        {
            $scope.sortingPredicate = sortingOrder.predicate;
            $scope.reverseOrder = sortingOrder.reverse;
        }

        //$scope.positiveCats = 0;
        //$scope.firstPositiveCatName = "";
        $scope.positiveCatsStack =[];

        $scope.$watch('pride',function(newValue, oldValue){

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


        }, true);




        $scope.currentSearchTerm = "";
        $scope.sortingOrder = $scope.sortingOrders[0];
        $scope.selectCat($scope.pride[0]);
        $scope.sortCats($scope.sortingOrder);
    };

    module.controller("mainController", mainController);

}(angular.module("app")));