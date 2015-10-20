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

	function saveEvent(event){
		var promise;
		if (event.id){
			promise = event.$update();
		} else {
			promise = Event.save(event).$promise;
		}
		return promise;
	}

	function deleteEvent(event){
		event.$remove();
		return event.$promise;
	}

	return {
		getEvents: getEvents,
		saveEvent: saveEvent,
		getEvent: getEvent,
		deleteEvent: deleteEvent
	};
});