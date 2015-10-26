angular.module('eventApp').directive('passwordValidation', function($parse){
	return {
		require: 'ngModel',
		link: function(scope, elem, attr, ngModel){
			ngModel.$validators.validCharacters = function(modelValue, viewValue) {
				var value = modelValue || viewValue;

				return /[0-9]+/.test(value) &&
					/[a-z]+/.test(value) &&
					/[A-Z]+/.test(value);
			};
		}
	};
});

angular.module('eventApp').directive('repeatPassword', function($parse){
	return {
		require: 'ngModel',
		scope: {
			password: '@repeatPassword'
		},
		link: function(scope, elem, attr, ngModel){
			ngModel.$validators.repeatPassword = function(modelValue, viewValue) {
				var value = modelValue || viewValue;

				console.log(value, scope.password, value == scope.password);
				return value == scope.password;
			};
		}
	};
});

angular.module('eventApp').directive('file', function(){
	return {
		require: 'ngModel',
		link: function(scope, elem, attr, ngModel){
			ngModel.$validators.file = function(modelValue, viewValue) {
				var value = modelValue || viewValue;

				console.log(value);
				return value;
			};

			attr.$observe('value', function(val){
				console.log('type ', val);
			});
		}
	};
});