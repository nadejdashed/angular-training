(function(module) {

    module.directive("imagePreview", function() {
      return {
          restrict: 'E',
          scope:{
            // TODO it's not necessary to put cat or imageName in the directive. It will be enough only imageUrl
          	cat:'=cat',
          	imageName:'@imageElementName'
          },
          
          templateUrl: '/app/templates/image-preview.html',
          controller: function($scope) {
            $scope.validImage = false;

            // TODO add error using ng-model controller as was described on form validation lecture
            $scope.checkImage = function(event){
              if(event.target.value) {
                var image = new Image();
                image.src = event.target.value;
                if(image.complete) {
                  $scope.validImage = true;
                } else {
                  $scope.validImage = false;
                }
              }
              return false;
            };
          }
      }
    });

}(angular.module("app")));