(function(module) {

	var eventsController = function ($uibModal, $log, $scope, $sce, events, urlValue, eventsService, $rootElement, $compile, $parse, selectedEventsService) {
		console.log(urlValue);
		console.log(events);
		$log.warn('AAAAA');

		$scope.events = events;
		console.log($scope.events[0]);

		$scope.html = $sce.trustAsHtml('<strong style="color: red">{{possitiveEventsCount}}</strong>');
		$scope.url = 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQppp5tMQwEj6JkqUzTmH0uzgm2EXE4tiObKB_sRqML2IN2jzP2S4bKMw';
		$scope.date = new Date('2015-12-01');

		$scope.possitiveEventsCount = 0;
		var killWatcher = $scope.$watch('events', function(newVal, oldVal){
			if(newVal){
				var possitiveEventsCount = 0;
				for (var i=0; i<newVal.length; i++){
					if (newVal[i].vote > 0) {
						possitiveEventsCount ++;
						//killWatcher();
					}
				}
				$scope.possitiveEventsCount = possitiveEventsCount;
			}

		}, true);/*

		setTimeout(function(){
			$scope.$applyAsync(function(){
				$scope.possitiveEventsCount = 5;
			});
		},1000);*/

		$scope.save = function(cat){
			var modalInstance = $uibModal.open({
				templateUrl: '/templates/model.html',
				controller: 'ModalInstanceCtrl',
				resolve: {
					items: function () {
						return $scope.items;
					}
				}
			});

			modalInstance.result.then(function () {
				eventsService.saveData(cat);
			}, function () {
				$log.info('Modal dismissed at: ' + new Date());
			});

		};


		var elem = $compile('<div>{{2 + 3}}</div>')($scope);
		$rootElement.append(elem);

		var fn = $parse('url');
		console.log(fn($scope));

		selectedEventsService.selectEvent('test1');
		selectedEventsService.selectEvent('test2');
		selectedEventsService.selectEvent('test3');
		selectedEventsService.getSelectedEvents();
		selectedEventsService.selectEvent('test4');
		selectedEventsService.getSelectedEvents();

	};

	module.controller("eventsController", eventsController);

}(angular.module("app")));