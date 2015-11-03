(function(module) {

	var eventsController = function ($scope, $sce) {
		var events = [{
			id: 1,
			name: 'Angular Training',
			src: 'https://angularjs.org/img/AngularJS-large.png',
			trainer: 'Nadzeya Shedava',
			date: '2015.10.12',
			tags: ['JS', 'Framework', 'Frontend'],
			//vote: 0
		}, {
			id: 2,
			name: '.Net intro',
			src: 'https://upload.wikimedia.org/wikipedia/fr/9/99/Logo_microsoft_net.png',
			trainer: 'Egor Tichonov',
			date: '2014.10.12',
			tags: ['Backend', 'Framework'],
			//vote: 0
		}, {
			id: 3,
			name: 'PHP in depth',
			src: 'http://uskov.com.ua/wp-content/uploads/2015/04/php-elephant.png',
			trainer: 'Alexandr Efimov',
			date: '2015.09.15',
			tags: ['Backend'],
			//vote: 0
		}, {
			id: 4,
			name: 'News in Drupal',
			src: 'http://www.activemedia.by/i/drupal_1.png',
			trainer: 'Alexandr Efimov',
			date: '2014.12.27',
			tags: ['Backend', 'CMS'],
			//vote: 0
		}];


		$scope.events = events;
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
	};

	module.controller("eventsController", eventsController);

}(angular.module("app")));