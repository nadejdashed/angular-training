(function(module) {
	"use strict";

	var addCatController = function () {
		var initialCat;

		this.cat = {
			name: "",
			imageUrl: ""
		}

		initialCat = angular.copy(this.cat);

		this.onCancelPressed = function() {
			this.cat = angular.copy(initialCat);
		};
	};

	module.controller("addCatController", addCatController);

}(angular.module("app")));