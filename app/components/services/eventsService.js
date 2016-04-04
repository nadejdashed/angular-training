(function(module) {
	
    function eventsService($http, $resource, $q, $timeout, $cookies){
			var events,// = $cookies.getObject('events'),
				Event = $resource('/json/events.json/:eventId', {eventId:'@id'}, {
					'update': { method:'PUT' }
				});

			$http.get('/event/1').then(function(){
				debugger;
			});
			
			function getEvents(){
				/*if (events) {
					return $q.resolve(events);
				} else{*/
					return $http.get('/json/events.json').then(function(data){
						events = data.data;
						//$cookies.putObject('events', events);
						return events;
					});
				//}
			}
			function getEventResources(){
				return Event.query();
			}
			function getEventsQ(){
				var deferred = $q.defer();
				$timeout(function(){
					deferred.reject([{
						"id": 2,
						"name": ".Net intro",
						"src": "https://upload.wikimedia.org/wikipedia/fr/9/99/Logo_microsoft_net.png",
						"trainer": "Egor Tichonov",
						"date": "2014.10.12",
						"tags": ["Backend", "Framework"]
					}]);
				}, 1000);
				return deferred.promise;
			}
        
			return {
				getEvents: getEvents,
				getEventResources: getEventResources,
				getEventsQ: getEventsQ
			};
    }
    
    module.service('eventsService', eventsService);

}(angular.module("app")));