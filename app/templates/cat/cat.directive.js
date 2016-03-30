(function(module) {

	var catDirective = function() {
		return {
			restrict: 'E',
			templateUrl: './app/templates/cat/cat.template.html',
			scope: {
				cat: '=ngModel'
			},
			link: function(scope, element) {
				scope.edited = scope.cat;

				scope.increaseVote = function(id){
					scope.cat.vote = scope.cat.vote + 1;
				}

				scope.decreaseVote = function(id) {
					scope.cat.vote = scope.cat.vote - 1;
				}

				scope.editCat = function(id) {
					scope.edited = scope.cat;
				}
			}
		}
	}

	module.directive('cat', catDirective);

}(angular.module('app')));
