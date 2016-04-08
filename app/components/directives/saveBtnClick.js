
var myModule = angular.module('app');

    myModule.directive('saveBtnClick', ['$document', function($document) {

        var directive = {};

        /*directive.scope = {

        	action: '&saveBtnClick'
        }*/

        directive.restrict = 'A'; 

        directive.link = function($scope, element, attributes) {
                

                $document.on("keypress", function() {

                	var keyPressed = event.keyCode || event.which;

			        if(keyPressed==13)
			        {

                		//alert("Save!");
                		//$scope.action;
                		element[0].submit();
                	}
                });


              // Removes bound events in the element itself when the scope is destroyed
		      $scope.$on('$destroy', function() {
		        $document.off("keypress");
		      });
                
        }

        return directive;
    }]);