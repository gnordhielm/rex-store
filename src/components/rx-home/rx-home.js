
import products from '../../assets/products.json'
import template from './rx-home.html'

angular
	.module('root')
	.component('rxHome', {
		template, controller,
		bindings: {}
	})

function controller() {
	console.log(products)
	this.products = products

}