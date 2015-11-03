(function(module) {

    var myFilter = function () {
        return function(val, par){
            return val > par ? ';)' : ':|';
        };
    };

    module.filter("myFilter", myFilter);

}(angular.module("app")));