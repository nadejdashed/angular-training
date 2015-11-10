angular.module("app").directive("errSrc", function() {
   return {
       restrict: 'A',
       link: {
           post: function (scope, element, attrs, ctrls) {
               element.on('error',function () {
                   if (attrs.src != attrs.errSrc) {
                       attrs.$set('src', attrs.errSrc);
                   }
               });
               attrs.$observe('ngSrc', function (value) {
                   if (!value && attrs.errSrc) {
                       attrs.$set('src', attrs.errSrc);
                   }
               });
           }
       }
   }
});