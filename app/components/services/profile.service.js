angular.module('eventApp').factory('profile', function(){
	var selectedEvents = [];

	return {
		selectEvent: function(event){
			var ind = selectedEvents.indexOf(event);

			if (ind < 0){
				selectedEvents.push(event);
			} else {
				selectedEvents.splice(ind, 1);
			}
			event.selected = !event.selected;
		},
		getSelectedEvents: function(){
			return selectedEvents;
		}
	}
});