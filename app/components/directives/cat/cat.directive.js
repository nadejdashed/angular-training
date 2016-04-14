(function(module) {

	var catDirective = function() {
		return {
			restrict: 'E',
			templateUrl: './app/components/directives/cat/cat.template.html',
			scope: {
				cat: '=ngModel'
			},
			controller: function($scope, $cookies) {
				var vote = function(vote) {
					var catVote = $cookies.get($scope.cat.id + '');

					if(!catVote) {
						$scope.cat.vote = vote ? $scope.cat.vote + 1 : $scope.cat.vote - 1;
						$cookies.put($scope.cat.id + '', $scope.cat.vote + '');
					} 
				}

				$scope.increaseVote = function(){
					vote(true);
				}

				$scope.decreaseVote = function() {
					vote(false);
				}

			},
			link: function(scope, element) {
			}
		}
	}

	module.directive('cat', catDirective);

}(angular.module('app')));
