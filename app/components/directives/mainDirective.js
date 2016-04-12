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

				$document.on('keydown', function (event) {
					scope.$apply(function () {
						if (event.keyCode == 13 && attrs.pressedEnter == 0) {
							scope.saveForm(scope.currentCat, scope.form[attrs.pressedEnter].$valid);
						}
					});
				});

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
			template: '<input type="url" name="pictUrl" placeholder="Picture Url"' +
			'ng-change="currentCat.isMessageVisible = false"' +
			'ng-model="currentCat.draftPictUrl"' +
			'ng-blur="saveUrl(currentCat)" />'
		}
	};


	module.directive('focusedElement', focusedElement);
	module.directive('pressedEnter', pressedEnter);
	module.directive('picture', picture);
	module.directive('pictUrl', pictUrl)

}(angular.module('app')));