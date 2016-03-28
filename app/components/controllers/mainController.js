(function(module) {

    var mainController = function () {
    	this.cats = [
    		{
    			imgSrc: "http://24.media.tumblr.com/tumblr_m9u8u7DV4h1qh66wqo1_500.jpg",
    			clicked: 0,
    			name: "Cat 1"
    		}, {
    			imgSrc: "http://24.media.tumblr.com/tumblr_m4jgfkIsWU1qjev1to1_500.jpg",
    			clicked: 0,
    			name: "Cat 2"
    		}, {
    			imgSrc: "http://24.media.tumblr.com/tumblr_m9u8u7DV4h1qh66wqo1_500.jpg",
    			clicked: 0,
    			name: "Cat 3"
    		}, {
    			imgSrc: "http://24.media.tumblr.com/tumblr_m4jgfkIsWU1qjev1to1_500.jpg",
    			clicked: 0,
    			name: "Cat 4"
    		}, {
    			imgSrc: "http://24.media.tumblr.com/tumblr_m9u8u7DV4h1qh66wqo1_500.jpg",
    			clicked: 0,
    			name: "Cat 5"
    		}, {
    			imgSrc: "http://24.media.tumblr.com/tumblr_m4jgfkIsWU1qjev1to1_500.jpg",
    			clicked: 0,
    			name: "Cat 6"
    		}

    	];
    	this.selectedCat;
    	
    	this.onCatSelected = function(cat) {
    		this.selectedCat = cat;
    	}

        this.onCatClicked = function (cat) {
        	cat.clicked++;
        };


    };

    module.controller("mainController", mainController);

}(angular.module("app")));