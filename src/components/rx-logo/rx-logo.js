
import template from './rx-logo.html'

angular
	.module('root')
	.component('rxLogo', {
		template, controller,
		bindings: {
			text: '<'
		}
	})

function controller() {

}