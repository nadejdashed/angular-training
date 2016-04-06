(function(module) {

	var catInfo = function() {
		return function(arr){
			var firstName, result;
			var count = 0;

			if (arr) {
				arr.forEach(function(elm) {
					if (elm.vote > 0) {
						count++;
						firstName = !firstName ? elm.name : firstName;
					}
				});

				if (count) {
					if (count > 1) {
						result = firstName + ' and ' + (count - 1) + ' ';
						result += (count == 2) ? 'cat has positive votes' : 'cats have positive votes';
					} else {
						result = firstName + ' only has a positive vote';
					}
				} else {
					result = 'No cat has a positive vote';
				}

				return result + ' from the current list';
			} else {
				console.warn('It\'s no possible to use this filter, data is not ready still');
			}
		}
	};

	module.filter("catInfo", catInfo);

}(angular.module("app")));