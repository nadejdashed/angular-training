angular.module('eventApp').filter('voteReaction', function(){

	return function(data, param1, param2){
		var str  = '';
		if (data > param1){
			str = 'Wow!'
		} else if (data < param2){
			str = 'Oops!'
		}
		return data + ' ' + str;
	};

});