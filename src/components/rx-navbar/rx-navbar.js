
import template from './rx-navbar.html'

angular
	.module('root')
	.component('rxNavbar', {
		template, controller,
		bindings: {}
	})

function controller($transitions) { "ngInject"
	const vm = this
	
	$transitions.onSuccess({}, () => {
		vm.menuOpen = false
	})

}
