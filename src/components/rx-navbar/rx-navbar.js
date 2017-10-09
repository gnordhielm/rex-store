
import template from './rx-navbar.html'

angular
	.module('root')
	.component('rxNavbar', {
		template, controller,
		bindings: {}
	})

function controller($element, $transitions, $root) { "ngInject"
	
	const vm = this

	vm.$onInit = () => {

		$transitions.onSuccess({}, () => {
			vm.menuOpen = false
		})

		vm.routes = $root.routes.map(route => {
			return route.name
		})


	}
	

}
