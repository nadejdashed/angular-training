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


	module.directive("focusedElement", focusedElement);
	module.directive("pressedEnter", pressedEnter);

}(angular.module("app")));