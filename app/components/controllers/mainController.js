(function(module) {
    "use strict";
    
    module.controller("mainController", mainController);

    // TODO everything is very great!!! Few things only - be careful with intends
    function mainController(catFactory) {
        var vm = this;
    	vm.cats = [];
        vm.catsWithPositiveVotes = [];
    	vm.selectedCat;
        vm.searchQuery;
        vm.orderBy = "name";
        vm.detailPanel;
    	

        init();
        //////

        function init() {
            catFactory.getAll().then(function(response) {
                vm.cats = response.data;
            });
        }

        vm.isCatDetails = function() {
            return vm.detailPanel === "DETAIL";
        };

        vm.isNewCatDetails = function() {
            return vm.detailPanel === "CREATE";
        }

        vm.onCreateNew = function() {
            vm.detailPanel = "CREATE";
        };

        vm.onCatRemove = function(cat) {
            catFactory.remove(cat).then(function(response) {
                vm.selectedCat = null;
                var index = vm.cats.findIndex(function(v) {
                    return v.id === cat.id;
                });
                if (index !== -1) {
                    vm.cats.splice(index, 1);
                }
            });
        };

    	vm.onCatSelected = function(cat) {
    		vm.selectedCat = cat;
            cat.visited = true;
            vm.detailPanel = "DETAIL";
    	};

        vm.onCatClicked = function (cat) {
        	cat.clicked++;
        };

        vm.onVoteUpClicked = function(cat) {
            voteChanged(cat, 1);

            var existingCat = vm.catsWithPositiveVotes.find(function (v) {
                return v.id === cat.id;
            });
            if (!existingCat) {
                vm.catsWithPositiveVotes.push(cat);
            }
        };

        vm.onVoteDownClicked = function(cat) {
            voteChanged(cat, -1);
        };

        vm.onSearchClicked = function() {
            vm.searchQuery = vm.searchText;
        };

        function voteChanged(cat, changedBy) {
            if (typeof cat.votes === 'undefined') {
                cat.votes = 0;
            }

            cat.votes = cat.votes + changedBy;
            catFactory.update(cat).then(function(response) {
                cat = angular.copy(response.data);
            });
        }

    };

}(angular.module("app")));