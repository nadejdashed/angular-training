(function(module) {

	var catDirective = function() {
		return {
			restrict: 'E',
			templateUrl: './app/templates/cat/cat.template.html',
			scope: {
				cat: '=ngModel'
			},
			controller: function($scope) {
				$scope.increaseVote = function(id){
					$scope.cat.vote = $scope.cat.vote + 1;
				}

				$scope.decreaseVote = function(id) {
					$scope.cat.vote = $scope.cat.vote - 1;
				}
			},
			link: function(scope, element) {
			}
		}
	}

	module.directive('cat', catDirective);

}(angular.module('app')));
