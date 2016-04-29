(function(module) {

    module.directive("imagePreview", function() {
      return {
          restrict: 'E',
          scope:{
          	cat:'=cat',
          	imageName:'@imageElementName'
          },
          
          templateUrl: '/app/templates/image-preview.html',
          controller: function($scope) {
            $scope.validImage = false;

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