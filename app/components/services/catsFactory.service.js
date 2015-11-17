angular.module("app").factory("catsFactoryService",
    function ($cookies, userService) {

        function checkCooke(key, id){
            var votedCats = $cookies.getObject(key);
            return votedCats!=undefined && votedCats.indexOf(id) >= 0;
        }

        function putCooke(key,id) {
            var values = $cookies.getObject(key);
            if (!values) {values = [];}
            if (values.indexOf(id)<0) {
                values.push(id);
                $cookies.putObject(key, values);
            }
        }

        function deleteCooke(key, id) {
            var values = $cookies.getObject(key);
            if (!values) {values = [];}
            var index = values.indexOf(this.id);
            if (index >= 0) {
                values.slice(index, 1);
                $cookies.putObject(key, values);
            }
        }

        function Cat(jsonData) {
            this.setData(jsonData);
        }

        Cat.prototype = {
            setData: function(jsonData) {
                //angular.extend(this, jsonData);
                this.id = jsonData ? jsonData.id : -1;
                this.name = jsonData ? jsonData.name : "";
                this.src = jsonData ? jsonData.src : "";
                this.vote = jsonData ? jsonData.vote : 0;
                this.owner = jsonData ? jsonData.owner : userService.getLogin();
                this._isVoted = checkCooke("votedCats", this.id);
                this._isVisited = checkCooke("visitedCats", this.id);
            },
            get isVoted() {
                return this._isVoted;
            },
            set isVoted(newValue) {
                if (this.id >=0 ) {
                    if (newValue) {
                        putCooke("votedCats", this.id);
                    } else {
                        deleteCooke("votedCats", this.id);
                    }
                    this._isVoted = newValue;
                }
            },
            get isVisited() {
                return this._isVisited;
            },
            set isVisited(newValue) {
                if (this.id >=0 ) {
                    if (newValue) {
                        putCooke("visitedCats", this.id);
                    } else {
                        deleteCooke("visitedCats", this.id);
                    }
                    this._isVisited = newValue;
                }
            },
            getJSONData: function() {
                return {
                    id: this.id,
                    name: this.name,
                    src: this.src,
                    vote: this.vote,
                    owner: this.owner
                };
            }
        };

        return Cat;
    }
);