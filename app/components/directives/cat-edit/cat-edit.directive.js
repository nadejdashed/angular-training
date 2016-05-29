(function(module) {

	var catEditDirective = function(catService) {
		return {
			restrict: 'E',
			templateUrl: './app/components/directives/cat-edit/cat-edit.template.html',
			scope: {
				cat: '=?ngModel'
			},
			controller: function($scope) {debugger;
				$scope.defaultImgUrl = 'http://dev.bowdenweb.com/a/i/cons/icomoon/svg/git-cat.svg';
				$scope.notFoundImgText = 'Sory but there is no such image :(';

				if(!$scope.cat) {
					$scope.cat = {
						name: '',
						src: $scope.defaultImgUrl,
						id: Math.floor(Math.random() * Number.MAX_SAFE_INTEGER),
						vote: 0
					};
				}

				$scope.addCat = function() {debugger;
					catService.addCat($scope.cat);
					// TODO add functionality to go to home page
				}
			},
			link: function(scope, element) {
				
			}
		}
	}

	// TODO make separate file. This directive is very useful and can be used somewhere else 
	var errorSrcDirective = function() {
		return {
			link: function(scope, element, attrs) {
				element.bind('error', function() {
					debugger;
					if (attrs.src !== attrs.errSrc) {
						  attrs.$set('ngSrc', attrs.errSrc);
						}
					});
				}
			}
	}

	module.directive('catEdit', catEditDirective)
		.directive('errSrc', errorSrcDirective);
})(angular.module('app'));