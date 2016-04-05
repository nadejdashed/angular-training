(function (module) {
function catCookiesService($cookies){
    this.voteCat = function(cat) {
        if(!$cookies.get(cat.id+'')){
            $cookies.put(cat.id + '', JSON.stringify({voted: ++cat.vote}));
        }
    }
}
module.service('catCookiesService', catCookiesService);
}(angular.module("app")));