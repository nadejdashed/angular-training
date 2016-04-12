(function (module) {

	var focusedElement = function () {
		return function (scope, element, attrs) {
			element[0].focus();
		}
	};

	var pressedEnter = function ($document) {
		return {
			restrict: 'AE',
			link: function (scope, element, attrs) {

				if (attrs.pressedEnter == 0) {
					$document.on('keydown', function (event) {
						scope.$apply(function () {
							if (event.keyCode == 13) {
								scope.saveForm(scope.currentCat, scope.form[attrs.pressedEnter].$valid);
							}
						});
					});
				}

			}
		}
	};

	var picture = function() {
		return {
			restrict: 'E',
			template: '<img ng-click="count(currentCat)" ng-src="{{currentCat.src}}"/>' +
			'<span class="counter">{{currentCat.counter ? currentCat.counter : 0}}</span>' +
			'<h2>{{currentCat.name}}</h2>'
		}
	};
	
	var pictUrl = function() {
		return {
			restrict: 'E',
			scope: {
				current: '=',
				saveUrl: '&'
			},
			template: '<input type="url" name="pictUrl" placeholder="Picture Url"' +
			'ng-change="current.isMessageVisible = false"' +
			'ng-model="current.draftPictUrl"' +
			'ng-blur="saveUrl()" />'
		}
	};

	var catVote = function() {
		return {
			restrict: 'E',
			replace: true,
			scope: {
				currentCat: '=',
				changeVote: '='
			},
			templateUrl: 'app/templates/catVote.html'
		}
	};
	
	var expander = function() {
		return {
			restrict: 'E',
			scope: {
				currentCat: '='
			},
			templateUrl: 'app/templates/expander.html',
			link: function(scope, element, attrs, ctrl) {
				var ul = element.find('ul');

				scope.expander = function() {
					if (element.hasClass('expanded')) {
						ul.empty();
					} else {
						ul.append('<li>Cat Url: ' + scope.currentCat.src + '</li>');
					}
					element.toggleClass('expanded');
				}
			}
		}
	};

	module.directive('focusedElement', focusedElement);
	module.directive('pressedEnter', pressedEnter);
	module.directive('picture', picture);
	module.directive('pictUrl', pictUrl);
	module.directive('catVote', catVote);
	module.directive('expander', expander);

}(angular.module('app')));