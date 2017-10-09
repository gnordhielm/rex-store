

import products from '../../assets/products.json'
import template from './rx-new-order.html'

angular
	.module('root')
	.component('rxNewOrder', {
		template, controller,
		bindings: {
		}
	})

function controller() {
	this.products = products
	this.$onChanges = bindings => {}
}