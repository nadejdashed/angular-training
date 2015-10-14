angular.module('eventApp').controller('eventsController', function($scope, $rootScope, $sce){
	var events = [{
			id: 1,
			name: 'Angular Training',
			src: 'https://angularjs.org/img/AngularJS-large.png',
			trainer: 'Nadzeya Shedava',
			date: new Date('2015.10.12'),
			vote: 0
		}, {
			id: 2,
			name: '.Net intro',
			src: 'https://upload.wikimedia.org/wikipedia/fr/9/99/Logo_microsoft_net.png',
			trainer: 'Egor Tichonov',
			date: 1444730882031,
			vote: 0
		}, {
			id: 3,
			name: 'PHP in depth',
			src: 'http://uskov.com.ua/wp-content/uploads/2015/04/php-elephant.png',
			trainer: 'Alexandr Efimov',
			date: '2015.09.15',
			vote: 0
		}, {
			id: 4,
			name: 'News in Drupal',
			src: 'http://www.activemedia.by/i/drupal_1.png',
			trainer: 'Alexandr Efimov',
			date: '2014.12.27',
			vote: 0
		}];

	$scope.events = events;

	$scope.selectedEvents = [];
	$scope.selectEvent = function(event){
		var ind = $scope.selectedEvents.indexOf(event);

		event.selected = !event.selected;
		if (ind < 0){
			$scope.selectedEvents.push(event);
		} else {
			$scope.selectedEvents.splice(ind, 1);
		}
	};

	$scope.vote = function($event, event, dif){
		$event.stopPropagation();
		event.vote = event.vote + dif;
	};

	$scope.sort = 'name';
	$scope.submitFilter = function(){
		$scope.submittedFilter = angular.copy($scope.filter);
	}
});