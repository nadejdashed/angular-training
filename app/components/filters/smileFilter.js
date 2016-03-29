(function(module) {
	"use strict";

	var smileFilter = function() {
		return function(votes) {
			if (!votes) {
				return ":|";
			}

			return votes > 0 ? ":)" : ":(";
		};
	};

	module.filter("smile", smileFilter);

}(angular.module("app")));