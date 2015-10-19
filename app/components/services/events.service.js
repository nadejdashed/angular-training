angular.module('eventApp').factory('events', function($resource, $q ){
	var Event = $resource('/events/:id', {id: '@id'}, {
		update: {method:'PUT'}
	});

	function getEvents(){
		return Event.query();
	}

	function getEvent(id){
		return Event.get({id: id});
	}

	function addEvent(event){
		var savedEvent = Event.save(event);
		return savedEvent.$promise;
	}

	return {
		getEvents: getEvents,
		addEvent: addEvent,
		getEvent: getEvent
	};
});