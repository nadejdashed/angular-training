﻿(function(module) {

    var mainController = function ($scope) {

        $scope.data = {
            cats: [
                {
                    name: "Sweet",
                    url: "http://pixdaus.com/files/items/pics/9/30/267930_6dfe4c42b4a3741ab7b0503573083df9_large.jpg",
                    clickNum: 0,
                    votes: 0,
                    viewed: false
                },
                {
                    name: "Calm",
                    url: "http://img09.deviantart.net/d639/i/2012/171/f/7/my_lovely_cat_2_by_kylelai624-d5467cn.jpg",
                    clickNum: 0,
                    votes: 0,
                    viewed: false
                },
                {
                    name: "Bad",
                    url: "http://www.wallcoo.net/animal/1600_homeless_cat_03/images/city_cat_5da-005012-x.jpg",
                    clickNum: 0,
                    votes: 0,
                    viewed: false
                },
                {
                    name: "Happy",
                    url: "http://img06.deviantart.net/8c02/i/2015/120/a/3/r_i_p__my_lovely_cat_by_mapaiyuna-d33k9fz.jpg",
                    clickNum: 0,
                    votes: 0,
                    viewed: false
                },
                {
                    name: "Normal",
                    url: "http://pre03.deviantart.net/e549/th/pre/f/2013/351/e/5/my_lovely_cat_by_fuzzykyo-d6yc04g.jpg",
                    clickNum: 0,
                    votes: 0,
                    viewed: false
                }
            ]
        };

        $scope.$on('listChanged', function(changedCat){
            $scope.selectedCat = changedCat;
        });

        $scope.selectCat = function(e, cat){
            if (cat != $scope.selectedCat){
                $scope.selectedCat = cat;
                cat.viewed = true;
            }
            else {
                if (!$(e.target).hasClass('btn'))
                    $scope.selectedCat = null;
            }
        };

        $scope.catUpVote = function(){
            if ($scope.selectedCat){
                $scope.selectedCat.votes++;
            }
        };

        $scope.catDownVote = function(){
            if ($scope.selectedCat){
                $scope.selectedCat.votes--;
            }
        };

        $scope.increaseClickNum = function(cat){
            cat.clickNum++;
        };
    };

    module.controller("mainController", mainController);

}(angular.module("app")));