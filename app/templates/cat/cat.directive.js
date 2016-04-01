(function(module) {

	var catDirective = function() {
		return {
			restrict: 'E',
			templateUrl: './app/templates/cat/cat.template.html',
			scope: {
				cat: '=ngModel',
				editable: '=?'
			},
			link: function(scope, element) {
				scope.editing = false;

				scope.increaseVote = function(id){
					scope.cat.vote = scope.cat.vote + 1;
				}

				scope.decreaseVote = function(id) {
					scope.cat.vote = scope.cat.vote - 1;
				}

				scope.editCat = function(id) {
					scope.editing = true;
				}
			}
		}
	}

	module.directive('cat', catDirective);

}(angular.module('app')));
