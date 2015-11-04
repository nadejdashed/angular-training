(function(module) {

	var count = 0;

	var selectedEventsService = function(){
		var events = [];

		function selectEvent(event){
			if (events.length < count){
				events.push(event);
			}
		}
		function getSelectedEvents(){
			console.log(events);
		}

		return {
			getSelectedEvents : getSelectedEvents,
			selectEvent: selectEvent
		}
	};

	var selectedEventsServiceProvider = function () {

		return {
			setCountSelectedEvents: function(c){
				count = c;
			},
			$get: selectedEventsService
		};
	};

	module.provider("selectedEventsService", selectedEventsServiceProvider);

}(angular.module("app")));