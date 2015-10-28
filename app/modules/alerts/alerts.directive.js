angular.module("alertsModule").directive('alerts', function(){
	return {
		template: [
			'<ul style="position:absolute; right:0; top: 0; width: 400px; margin:20px; list-style-type: none;">',
			'  <li ng-repeat="message in messages track by $index" class="alert alert-danger">',
			'    {{message}}',
			'  </li>',
			'</ul>'
		].join('')
	};
});