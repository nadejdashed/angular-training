(function(module) {

	var catDirective = function() {
		return {
			restrict: 'E',
			templateUrl: './app/templates/cat/cat.template.html',
			scope: {
				cat: '=ngModel'
			},
			link: function(scope, element) {
				scope.increaseVote = function(id){
					scope.cat.vote = scope.cat.vote + 1;
				}

				scope.decreaseVote = function(id) {
					scope.cat.vote = scope.cat.vote - 1;
				}
			}
		}
	}

	module.directive('cat', catDirective);

}(angular.module('app')));
