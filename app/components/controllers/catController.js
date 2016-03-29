(function(module) {
	"use strict";

	var catController = function () {
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

	module.controller("catController", catController);

}(angular.module("app")));