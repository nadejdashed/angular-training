angular.module('eventApp').directive('event', function(profile){
	return {
		templateUrl: '/templates/main.html',
		scope: {
			event: '=eventAttr'
		},
		link: function($scope, elem, attrs) {
			$scope.maxVote = 1000;

			$scope.selectEvent = function (event) {
				profile.selectEvent(event);
			};

			$scope.vote = function ($event, event, dif) {
				$event.stopPropagation();
				var vote = event.vote + dif;
				if (vote < $scope.maxVote){
					event.vote = event.vote + dif;
				}
			}

			attrs.$observe('maxVote', function(){
				console.log(arguments);
				$scope.maxVote = arguments
			});
		}
	};
});

angular.module('eventApp').directive('ngSubmit', function($parse, $document){
	return {
		link: function(scope, elem, attr){
			var fn = $parse(attr.ngSubmit),
				formName = attr.name;

			$document.on('keydown', function(ev){
				if (ev.keyCode === 13 && scope[formName].$valid){
					scope.$apply(function(){
						fn(scope, {$event: ev});
					});
				}
			});
		}
	};
});