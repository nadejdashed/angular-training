angular.module('app-mock', ['ngMockE2E'])
   .run(function($httpBackend) {

    var cats = [
           {"id": 1,
            "name": "Alex",
            "src": "http://25.media.tumblr.com/tumblr_lncvc9SMfW1qbe5pxo1_500.jpg",
            "vote": 0},
        {
            "id": 2,
            "name": "Viktor",
            "src": "http://24.media.tumblr.com/tumblr_lsrk9vhVai1qzopnho1_1280.jpg",
            "vote": 0
        }, {
            "id": 3,
            "name": "Albert",
            "src": "http://24.media.tumblr.com/tumblr_m4jgfkIsWU1qjev1to1_500.jpg",
            "vote": 0
        }, {
            "id": 4,
            "name": "Lia",
            "src": "http://24.media.tumblr.com/tumblr_m9u8u7DV4h1qh66wqo1_500.jpg",
            "vote": 0
        },

            {
                "id": 5,
                "name": "Unknown",
                "src": "http://goodnewsanimal.ru/_nw/37/00118217.jpg",
                "vote": 0
            }
        ];

       $httpBackend.whenGET(/\.html/).passThrough();
       $httpBackend.whenGET(/\.json/).passThrough();
       $httpBackend.whenGET('/cats').respond(cats);

       $httpBackend.whenGET(/cat\/\w+$/).respond(function (method, url, params) {
               var re = /.*\/cat\/(\w+)/;
               var catId = parseInt(url.replace(re, '$1'), 10);

                var cat = null;
                for(var i = 0; i<cats.length; i++){
                    if(cats[i].id === catId){
                        cat = cats[i];
                        break;
                    }
                }
            return [200,cat];
       });
       
    $httpBackend.whenPOST('/cats').respond(function(method, url, data){
        var newCat = JSON.parse(data);
        var oldCat = false;
        debugger;
        if(newCat.id != undefined){
            for(var i=0; i < cats.length; i++){
                if(cats[i].id === newCat.id){
                    cats[i].name = newCat.name;
                    cats[i].src = newCat.src;
                    oldCat = true;
                    break;
                }
            }
        }

        if(!oldCat){
            newCat.vote=0;
            newCat.id = cats[cats.length-1].id + 1;
            cats.push(newCat);
        }

        return [200, data];
    });
  });

angular.module('app').requires.push('app-mock');