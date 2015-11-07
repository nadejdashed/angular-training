(function(module) {



    var smileFilter = function ()
    {

        return function (vote)
        {
            var result = ':|';
            if(vote < 0)
            {
                result = ':(';
            }
            else if(vote > 0)
            {
                result = ':)';
            }
            return result;
        }
    }
    module.filter("smileFilter", smileFilter);

}(angular.module("app")));