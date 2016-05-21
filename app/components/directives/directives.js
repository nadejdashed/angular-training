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
            // TODO use more neutral name of template. This directive could be used in other places, for example to show user picture 
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
                // TODO better to implement universal directive that doesn't know if it works with cat or with something else
                // I could not tell anything else because I don't kave possibility to see template but name and id I think are not necessary here
                // TODO it may be enough to define vote in the directive using one-way binding. I mean "vote: @v"
                vote:'=v',
                name:'=n',
                catId:'=c',
                f:"&"
            },
            templateUrl:"app/templates/voteSpinner.html"
        };
    });
}(angular.module("app")));