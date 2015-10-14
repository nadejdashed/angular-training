angular.module('app').filter('clickCountFilter', function(){
    return function(count){
        var raiting = '';

        if(count > 0)  raiting = ':)';

        else if(count < 0)  raiting = ':(';

        else if(count === 0) raiting = ':|';

        return raiting;
    };
});