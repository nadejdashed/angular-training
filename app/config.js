(function(module) {

	module.config(function($stateProvider, $locationProvider, $urlRouterProvider) {
		$locationProvider.html5Mode({
		  enabled: true,
		  requireBase: true
		});

		$urlRouterProvider.otherwise('/');

		$stateProvider
			.state('cats', {
				url: '/',
				template: "<cat-clicker ng-model='cats'></cat-clicker>",
				controller: 'mainController'
			})
			.state('cats.cat', {
				url: 'cats/:catId',
				templateUrl: './app/templates/selected-cat.template.html',
				resolve: {
					catId: ['$stateParams', function($stateParams) {
						debugger;
						return $stateParams.catId;
					}]
				}
			})
			.state('edit', {
				url: '/edit',
				template: '<cat-edit></cat-edit>',
				controller: 'editController'
			})
			.state('about', {
				url: '/about',
				template: '<h1>Awesome cats site!</h1>'
			});
	});

})(angular.module('app'));