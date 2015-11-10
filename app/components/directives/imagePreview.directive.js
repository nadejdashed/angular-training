angular.module("app").directive('imagePreview', function ($parse) {
    return {
        restrict: "E",
        templateUrl: "/templates/imagePreview.html",
        scope: {},
        //link: {
        //    post: function (scope, elem, attrs, ctrls) {
        //        var imgElement = elem[0].querySelector('img');
        //        if (imgElement) {
        //            //imgElement.ngSrc = $parse('imageUrl.$valid?image.url:errorImageUrl');
        //            imgElement.onerror = function() {
        //                imgElement.src = scope.errorImageUrl;
        //            }
        //        }
        //    }
        //},
        controller: function($scope, $attrs) {
            $scope.urlTitle = $attrs.urltitle;
            $scope.errorImageUrl = $attrs.errorImageUrl;
        }
    }
});