angular.module('eventApp').factory('events', function($resource, $http, $timeout,  $q ){
  var Event = $resource('/events/:id', {id: '@id'}, {
		update: {method:'PUT'}
	});
	console.log(Event());

	function getEvents(){
		var defer = $q.defer(),
			events;

		if (events) {
			defer.resolve(JSON.parse(events));
		} else {
			events = Event.query();
			events.$promise.then(function(data){
				events = data;
				$timeout(function(){
					defer.resolve(events);
				}, 3000);
			}, function(){
				defer.reject('error');
			});
		}

		return defer.promise;
	}

	function getEvent(id){
		return Event.get({id:id});
	}

	function addEvent(event){
		var defer = $q.defer();

		$http.post('/events', event).then(function(){
			console.log('added');
			location.href ='/';
		}, function(){
			console.log('error');
		});

		return defer.promise;
	}

	return {
		getEvents: getEvents,
		addEvent: addEvent,
		getEvent: getEvent
	};
});