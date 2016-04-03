/**
 * Created by siarhei on 03.04.16.
 */
angular.module("app").service("catSenderService", function($resource){
    "use strict";
    var Cat = $resource('/cat', {catId:  '@id'});
    this.sayHello = function() {
      alert('Hi!');
    };

    this.provideCats = function() {
        return Cat.query({catId: 'all'});
    };

    this.saveCats = function(cat) {
        var toSave = new Cat(cat);
        toSave.$save();
    }
});