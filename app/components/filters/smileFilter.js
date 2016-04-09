(function(module) {
	"use strict";

	var smileFilter = function() {
		return function(votes) {
			var numVote = parseInt(votes);
			if (!numVote) {
				return ":|";
			}

			return numVote > 0 ? ":)" : ":(";
		};
	};

	module.filter("smile", smileFilter);

}(angular.module("app")));