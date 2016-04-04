(function(module) {

	var catInfo = function() {
		return function(arr){

			return 'filter = ' + arr.vote;
		}
	};

	module.filter("catInfo", catInfo);

}(angular.module("app")));