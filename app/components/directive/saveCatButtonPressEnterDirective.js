angular.module('app').directive('ngSubmit', function ($parse, $document) {
    return {
        link: function (scope, elem, attr)
        {
            var saveCat = $parse(attr.ngSubmit); //include function saveCat()
            $document.on('keydown', function(event){
                if(event.keyCode === 13 && scope.addCatForm.$valid)
                {
                    saveCat(scope, {$event: event });
                }
            });
        }
    };

});