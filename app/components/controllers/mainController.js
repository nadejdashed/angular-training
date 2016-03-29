(function(module) {
    "use strict";

    var mainController = function () {
    	this.cats = [
    		{
    			imgSrc: "http://24.media.tumblr.com/tumblr_m9u8u7DV4h1qh66wqo1_500.jpg",
    			clicked: 0,
    			name: "Murzik",
                visited: false,
                votes: 0,
                birthday: new Date(2014, 4, 11)
    		}, {
    			imgSrc: "http://24.media.tumblr.com/tumblr_m4jgfkIsWU1qjev1to1_500.jpg",
    			clicked: 0,
    			name: "Ceasar",
                visited: false,
                votes: 0,
                birthday: new Date(2015, 5, 14)
    		}, {
    			imgSrc: "http://24.media.tumblr.com/tumblr_m9u8u7DV4h1qh66wqo1_500.jpg",
    			clicked: 0,
    			name: "Koshak",
                visited: false,
                votes: 0,
                birthday: new Date(2005, 5, 1)
    		}, {
    			imgSrc: "http://24.media.tumblr.com/tumblr_m4jgfkIsWU1qjev1to1_500.jpg",
    			clicked: 0,
    			name: "Austin",
                visited: false,
                votes: 0,
                birthday: new Date(2015, 1, 1)
    		}, {
    			imgSrc: "http://24.media.tumblr.com/tumblr_m9u8u7DV4h1qh66wqo1_500.jpg",
    			clicked: 0,
    			name: "Barsik",
                visited: false,
                votes: 0,
                birthday: new Date(2013, 4, 4)
    		}, {
    			imgSrc: "http://24.media.tumblr.com/tumblr_m4jgfkIsWU1qjev1to1_500.jpg",
    			clicked: 0,
    			name: "Alex",
                visited: false,
                votes: 0,
                birthday: new Date(2013, 6, 1)
    		}

    	];
    	this.selectedCat;
        this.searchQuery;
        this.orderBy = "name";
    	
    	this.onCatSelected = function(cat) {
    		this.selectedCat = cat;
            cat.visited = true;
    	}

        this.onCatClicked = function (cat) {
        	cat.clicked++;
        };

        this.onVoteUpClicked = function(cat) {
            voteChanged(cat, 1);
        };

        this.onVoteDownClicked = function(cat) {
            voteChanged(cat, -1);
        };

        this.onSearchClicked = function() {
            this.searchQuery = this.searchText;
        };

        function voteChanged(cat, changedBy) {
            if (typeof cat.votes === 'undefined') {
                cat.votes = 0;
            }

            cat.votes = cat.votes + changedBy;
        }

    };

    module.controller("mainController", mainController);

}(angular.module("app")));