
import template from './rx-gallery-item.html'

angular
	.module('root')
	.component('rxGalleryItem', {
		template, controller,
		bindings: {
			item: '<'
		}
	})

function controller() {
	this.$onChanges = bindings => {}
}