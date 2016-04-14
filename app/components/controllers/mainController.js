(function(module) {
    "use strict";

    module.controller("mainController", mainController);

    // TODO everything is very great!!! Few things only - be careful with intends
    function mainController(sharedCats, $state) {
        var vm = this;
    	vm.cats = [];
        vm.catsWithPositiveVotes = [];
        vm.searchQuery;
        vm.orderBy = "name";
        vm.searchText;


        init();
        //////

        function init() {
            loadList();
        }

        function loadList() {
            sharedCats.getAll().then(function(data) {
                vm.cats = data;
            });
        }

        vm.onReloadList = function() {
            loadList();
        };

    	vm.onCatSelected = function(cat) {
            cat.visited = true;

            $state.go("catsList.detail", {
                catId: cat.id
            });
    	};

        vm.onSearchClicked = function() {
            vm.searchQuery = vm.searchText;
        };

    }

}(angular.module("app")));