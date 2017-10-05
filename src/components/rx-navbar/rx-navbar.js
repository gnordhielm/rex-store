
import template from './rx-navbar.html'

angular
	.module('root')
	.component('rxNavbar', {
		template, controller,
		bindings: {}
	})

function controller() {
	const vm = this
	vm.menuOpen = true
}