
import template from './rx-gallery.html'

angular
	.module('root')
	.component('rxGallery', {
		template, controller,
		bindings: {
			products: '<'
		}
	})

function controller() {

}