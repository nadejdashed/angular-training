"use strict";
angular.module("eventApp", ['ngCookies', 'ngResource']).config(function($httpProvider){

	/*$httpProvider.interceptors.push(['$q', '$location', '$localStorage', function($q, $location) {
		return {
			'request': function (config) {
				config.headers = config.headers || {};
				if (token) {
					config.headers.Authorization = 'Bearer ' + $localStorage.token;
				}
				return config;
			},
			'responseError': function(response) {
				if(response.status === 401 || response.status === 403) {
					$location.path('/signin');
				}
				return $q.reject(response);
			}
		};
	}]);*/

	/*$provide.decorator('ngClickDirective', [
		'$delegate', '$parse',
		function ($delegate, $parse) {

			$delegate[0].link = function(scope, element, attrs) {
				var fn = $parse(attrs.ngClick);
				element.on('click', function(event) {
					scope.$apply(function(){
						console.log('fuuuuuuuuuuuuuu');
						fn(scope, {$event: event});
					});
				});
			};

			return $delegate;
		}
	]);*/
});