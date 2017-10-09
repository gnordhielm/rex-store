
import template from './rx-logo.html'

angular
	.module('root')
	.component('rxLogo', {
		template, controller,
		bindings: {
			text: '@'
		}
	})

function controller() {

	this.$onChanges = bindings => {
		for (let key in bindings) {
			if (key === 'text') this.text = typeof bindings[key].currentValue === 'string'
		}
	}


}