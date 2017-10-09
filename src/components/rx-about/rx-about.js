
import copy from '../../assets/copy.json'
import template from './rx-about.html'
import workingImg from '../../assets/working.png'

angular
	.module('root')
	.component('rxAbout', {
		template, controller,
		bindings: {}
	})

function controller() {

	const vm = this

	vm.copy = copy.about
	vm.workingImg = workingImg

}