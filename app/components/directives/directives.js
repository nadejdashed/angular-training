(function(module) {

    module.directive('myFocus', function () {
        return {
            restrict: 'A',
            link: function (scope, element, attr) {
                element[0].focus();
            }
        };
    });

    module.directive('formSubmit', function ($document) {
        return function(scope, element, attrs) {
            var handler = function(event) {
                if(event.which === 13) {
                    scope.$apply(function(){
                        scope.$eval(attrs.formSubmit);
                    });
                    event.preventDefault();
                }
            };
            $document.bind("keypress",handler);
            scope.$on('$destroy',function(){
                $document.off('keypress', handler);
            });
        };
    });

    module.directive('imagePreview', function () {
        return {
            restrict: 'E',
            templateUrl:"app/templates/addCatFields.html",
            scope:{
                myCatSrc: '=bind'
            }
        };
    });

    module.directive('voteSpinner', function () {
        return {
            restrict: 'E',
            scope:{
                vote:'=v',
                name:'=n',
                catId:'=c',
                f:"&"
            },
            templateUrl:"app/templates/voteSpinner.html"
        };
    });
}(angular.module("app")));