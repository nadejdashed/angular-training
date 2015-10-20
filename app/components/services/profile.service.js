angular.module('eventApp').factory('profile', function(){
	var selectedEvents = [];

	function selectEvent(event){
		var ind = selectedEvents.indexOf(event);

		if (ind < 0){
			selectedEvents.push(event);
		} else {
			selectedEvents.splice(ind, 1);
		}
		event.selected = !event.selected;
	}

	function getSelectedEvents(){
		return selectedEvents;
	}

	return {
		selectEvent: selectEvent,
		getSelectedEvents: getSelectedEvents
	}
});