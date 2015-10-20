angular.module('eventApp').factory('permissionService', function(authService){

	function checkAddPermission(){
		return !!authService.getUser();
	}

	function checkOwnership(owner){
		var user = authService.getUser(),
			login = user && user.login;
		return owner && owner === login;
	}

	return {
		checkAddPermission: checkAddPermission,
		checkOwnership: checkOwnership
	}
});