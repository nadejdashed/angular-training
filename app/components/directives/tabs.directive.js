angular.module('eventApp').directive('myTabs', function(){
	return {
		compile: function(){
			console.log('compile PARENT');
			return {
				pre: function(){ console.log('pre PARENT'); },
				post: function(){ console.log('post PARENT'); }
			}
		}
	};
});
angular.module('eventApp').directive('myTab', function(){
	return {
		compile: function(){
			console.log('compile CHILD');
			return {
				pre: function(){ console.log('pre CHILD'); },
				post: function(){ console.log('post CHILD'); }
			}
		}
	};
});