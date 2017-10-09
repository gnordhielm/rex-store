
angular
	.module('root')
	.provider('$root', $rootProvider)

function $rootProvider() {

	this.setRoutes = routes => {
		$root.routes = [ ...routes ]
	}

	function $root() {

	}

	this.$get = () => $root
}