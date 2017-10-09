
import _ from 'lodash'
import products from './assets/products.json'

angular
	.module('root')
	.config(router)

function router($stateProvider, $urlRouterProvider, $rootProvider) { "ngInject"
	
	const routes = [
		{
			name: 'home',
			url: '/',
		},
		{
			name: 'about',
		},
		{
			name: 'gallery',
		},
		{
			name: 'new-order',
			title: 'start an order',
		}
	]

	$rootProvider.setRoutes(routes)

	$urlRouterProvider.otherwise('/')

	routes.forEach(route => {

		let { name, url, title, component } = route

		title = title || name

		$stateProvider.state({
			name,
			url: url || `/${name}`,
			title: _.startCase(title),
			component: component || _.camelCase(`rx ${name}`)
		})

	})

	// $stateProvider

	// 	.state('home', {
	// 		url: '/',
	// 		component: 'rxHome'
	// 	})

	// 	.state('about', {
	// 		url: '/about',
	// 		component: 'rxAbout'
	// 	})

	// 	.state('products', {
	// 		url: '/gallery',
	// 		component: 'rxGallery',
	// 	})

	// 	.state('products.product', {
	// 		url: '/{productId}',
	// 		component: 'rxGallery',
	// 		resolve: {
	// 			product: (products, $stateParams) => {
	// 				return products.find(product => product.id === $stateParams.productId)
	// 			}
	// 			// product: ($transition$, ProductService) => {
	// 				// return ProductService.read($transition$.params().personId)
	// 			// }
	// 		}
	// 	})

	// 	.state('orders', {
	// 		url: '/orders',
	// 		component: 'rxOrders'
	// 	})

}