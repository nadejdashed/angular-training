angular.module("alertsModule").directive('alerts', function(){
	return {
		template: [
			//'<div class="alert alert-danger alert-dismissible" role="alert">',
			//'	<button type="button" class="close" data-dismiss="alert" aria-label="Close">',
			//'		<span aria-hidden="true">&times;</span>',
			//'	</button>',
			//'	<strong>Warning!</strong> Better check yourself, you\'re not looking too good.',
			//'</div>'
			'<ul style="position:absolute; right:0; top: 0; width: 400px; margin:20px; list-style-type: none;">',
			'  <div ng-repeat="message in messages track by $index" class="alert alert-danger alert-dismissible" role="alert">',
			'	<button type="button" class="close" data-dismiss="alert" aria-label="Close" ng-click="closeMessage(message)">',
			'		<span aria-hidden="true">&times;</span>',
			'	</button>',
			'    {{message}}',
			'  </div>',
			'</ul>'

			//'<ul style="position:absolute; right:0; top: 0; width: 400px; margin:20px; list-style-type: none;">',
			//'  <li ng-repeat="message in messages track by $index" class="alert alert-danger">',
			//'    {{message}}',
			//'  </li>',
			//'</ul>'
		].join('')
	};
});