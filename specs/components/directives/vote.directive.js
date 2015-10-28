/*angular.module('eventApp').directive('voteSpinner', function(){
	return {
		template:
			'<button class="btn btn-default btn-sm" ng-click="vote($event, 1)"><i class="glyphicon glyphicon-arrow-up"></i></button>' +
			'<button class="btn btn-default btn-sm" ng-click="vote($event, -1)"><i class="glyphicon glyphicon-arrow-down"></i></button>',
		scope: {
			voteVal: '=voteSpinner',
			fnUpdate: '&'
		},
		controller: function($scope){
			$scope.vote = function ($event, dif) {
				$event.stopPropagation();

				$scope.voteVal = $scope.voteVal + dif;
				$scope.fnUpdate({vote: $scope.voteVal});
			};
		}
	};
});*/

describe('voteDirective', function(){
	var elem, isScope,
		event = {
			stopPropagation: function(){}
		};

	beforeEach(module('eventApp'));
	beforeEach(inject(function($compile, $rootScope){
		var scope = $rootScope.$new();
		scope.data = 5;
		scope.fn = function(){};

		elem = $compile('<div vote-spinner="data" fn-update="fn()"></div>')(scope);
		isScope = elem.isolateScope();
		console.log(isScope);
		spyOn(isScope, 'fnUpdate');
	}));

	it('increase', function(){
		isScope.vote(event, 1);
		expect(isScope.voteVal).toBe(6);
		expect(isScope.fnUpdate).toHaveBeenCalled();

		console.log(elem.find('#vote').text());
	});
});