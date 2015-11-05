(function(module) {

    var grandparent = function () {
        return {
            scope: {},
            compile: function(elem, attrs){
                /*console.log('grandparent', elem, attrs);*/
                return {
                    pre: function(scope, elem, attrs, ctrls, transcludeFn){
                        attrs.$observe('text', function(val){
                            console.log(val);
                        });

                        scope.text1 = 'text1';
                        console.log('grandparent PRE link');
                    },
                    post: function(scope, elem, attrs, ctrls, transcludeFn){
                        scope.text2 = 'text2';
                        console.log('grandparent POST link');
                    }
                }
            },
            controller: function(){
                var children = [];
                this.addChild = function(child){
                    children.push(child);
                    console.log('AAAAAAAADED!!!');
                }
            }
        };
    };

    var parent = function () {
        return {
            /*compile: function(elem, attrs){
                console.log('parent', elem, attrs);
            }*/
            require: '^grandparent',
            link: {
                pre: function(scope, elem, attrs, ctrls, transcludeFn){
                    console.log(scope.text1);
                    console.log('parent PRE link');
                    ctrls.addChild(scope);
                },
                post: function(scope, elem, attrs, ctrls, transcludeFn){
                    console.log(scope.text2);
                    console.log('parent POST link');
                }
            }
        };
    };

    var child = function () {
        return {
            /*compile: function(elem, attrs){
                console.log('child', elem, attrs);
            }*/
            link: {
                pre: function(scope, elem, attrs, ctrls, transcludeFn){
                    console.log('child PRE link');
                },
                post: function(scope, elem, attrs, ctrls, transcludeFn){
                    console.log('child POST link');
                }
            }
        };
    };

    module.directive("grandparent", grandparent);
    module.directive("parent", parent);
    module.directive("child", child);


}(angular.module("app")));