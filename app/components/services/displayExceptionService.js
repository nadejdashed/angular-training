(function(module) {

    module.factory("displayExceptionService",function(){

        function displayException(text){
            var errorContainer = $('#display-error');
            errorContainer.show().append(
                '<h5 style="color: darkred;">' + text + '</h5>'
            );
            setTimeout(function(){
                errorContainer.hide().empty();
            }, 3000);
        }

        return {
            displayException: displayException
        };

    });

}(angular.module("app")));