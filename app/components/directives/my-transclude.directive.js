angular.module('eventApp').directive('myTransclude', function($compile){
	return {
		transclude: 'element',
		link: function(scope, elem, attrs, ctrl, transcludeFn){
			transcludeFn(scope, function(clone, scope){
				var html = '<span> {{anotherSomething}}</span>';
				clone[clone.length++] = $compile(html)(scope)[0];
				elem.after(clone);
			});
		}
	};
});