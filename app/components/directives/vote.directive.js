angular.module('eventApp').directive('voteSpinner', function(){
	return {
		template:
			'<span id="vote">{{ctrl.voteVal}}</span>' +
			'<button class="btn btn-default btn-sm" ng-click="ctrl.vote($event, 1)"><i class="glyphicon glyphicon-arrow-up"></i></button>' +
			'<button class="btn btn-default btn-sm" ng-click="ctrl.vote($event, -1)"><i class="glyphicon glyphicon-arrow-down"></i></button>',
		scope: {
			voteVal: '=voteSpinner',
			fnUpdate: '&'
		},
		controllerAs: 'ctrl',
		bindToController: true,
		controller: function(){
			var vm = this;

			vm.vote = function ($event, dif) {
				$event.stopPropagation();

				vm.voteVal = vm.voteVal + dif;
				vm.fnUpdate({vote: vm.voteVal});
			};
		}
	};
});