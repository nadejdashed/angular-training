(function(module) {

	module.factory("dataStorage", dataStorage);

	function dataStorage($cookies) {

		return {
			put: put,
			get: get
		};
		////

		function put(id, value) {
			$cookies.put(id, value);
		}

		function get(id) {
			return $cookies.get(id);
		}
	}

} (angular.module("app")));