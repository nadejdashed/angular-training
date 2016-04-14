(function (module) {

    module.controller("catDetailsController", catDetailsCtrl);

    function catDetailsCtrl($state, $stateParams, sharedCats, $rootScope, catFactory) {
        var vm = this;

        vm.selectedCat;
        vm.canVote;
        vm.onVoteUp = onVoteUp;
        vm.onVoteDown = onVoteDown;
        vm.onCatClicked = onCatClicked;
        vm.onCatRemove = onCatRemove;

        init();
        ///

        function init() {
            vm.selectedCat = sharedCats.getCat($stateParams.catId).then(function (data) {
                vm.selectedCat = data;
                vm.canVote = catFactory.canVoteFor(vm.selectedCat);
            });
        }

        function onVoteUp(cat) {
            voteChanged(vm.selectedCat, 1);
        };

        function onVoteDown(cat) {
            voteChanged(vm.selectedCat, -1);
        };

        function voteChanged(cat, changedBy) {
            catFactory.changeVote(cat, changedBy).then(function (data) {
                cat = angular.copy(data);
                vm.canVote = catFactory.canVoteFor(cat);
            });
        }

        function onCatClicked() {
            vm.selectedCat.clicked++;
            catFactory.update(vm.selectedCat);
        }
        
        function onCatRemove() {
            sharedCats.remove(vm.selectedCat).then(function() {
                $state.go("catsList");
                // $rootScope.$apply();
            });
        }

    }

}(angular.module("app")));