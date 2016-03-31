(function(module) {
	
    function eventsSelection(){
			var count = 1;
			
			function eventsSelectionService(){
				var events = [];
				return {
					setSelection: function(ev){
						if (events.length < count){
							events.push(ev);
						}
					},
					getSelection: function(){
						return events;
					}
				}
			}
			
			return {
				setCount: function (c){
					count = c
				},
				$get: eventsSelectionService
			};
    }
    
    module.provider('eventsSelection', eventsSelection);
    

}(angular.module("app")));