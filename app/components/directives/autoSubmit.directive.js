angular.module('eventApp').directive('autoSubmit', function($parse, $document){
	return {
		require: 'ngSubmit',
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