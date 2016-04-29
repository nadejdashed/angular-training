(function(module) {

    module.directive("saveClick", function($document) {
      return {
          restrict: 'A',
          link: function(scope, element, attrs) {
            var onClick = function(event){
            	 if(event.keyCode === 13) {
            		element[0].click();
            	}
            };
            $document.bind('keyup', onClick);

            scope.$on("$destroy", function () {
                 $document.unbind('keyup', onClick);
            });
        } 
      }
    });

}(angular.module("app")));