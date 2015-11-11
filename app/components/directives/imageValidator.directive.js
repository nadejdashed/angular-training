angular.module("app").directive("errSrc", function() {
   return {
       restrict: 'A',
       link: {
           pre: function (scope, element, attrs, ctrls) {
               if(element[0].tagName != 'IMG') {
                   var imgElement = element[0].querySelector('img');
                   if (imgElement) {
                       imgElement.setAttribute('err-src', attrs.errSrc);
                   }
               }
           },
           post: function (scope, element, attrs, ctrls) {
               if(element[0].tagName != 'IMG') {
                   return;
               } else {
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
               };
           }
       }
   }
});