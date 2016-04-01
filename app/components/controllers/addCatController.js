(function(module) {
    "use strict";

    module.controller("addCatController", addCatController);

    function addCatController(catFactory) {
        var vm = this;
        var initialCat;

        vm.cat = {};

        ////
        function init() {
            vm.cat = {
                name: "",
                imageUrl: ""
            };
            initialCat = angular.copy(vm.cat);
        }

        vm.onCancelPressed = function() {
            vm.cat = angular.copy(initialCat);
        };

        vm.onSubmitPressed = function(form) {
        	if (form.$invalid) {
        		return;
        	}

        	catFactory.create(vm.cat).then(function(response) {
        		alert("New Cat Created");
        		vm.cat = angular.copy(initialCat);
        	});
        }
    };



}(angular.module("app")));
