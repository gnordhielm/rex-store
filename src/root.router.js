
import products from './assets/products.json'

export default function router($stateProvider, $urlRouterProvider) { "ngInject"
	
	$urlRouterProvider.otherwise('/')

	$stateProvider

		.state('home', {
			url: '/',
			component: 'rxHome'
		})

		.state('about', {
			url: '/about',
			component: 'rxAbout'
		})

		.state('products', {
			url: '/gallery',
			component: 'rxGallery',
			resolve: {
				products: ($transition$) => {
					// console.log($transition$)
					return true
				}
				// products: (ProductService) => {
					// return ProductService.index()
					// return products
				// }
			}
		})

		.state('products.product', {
			url: '/{productId}',
			component: 'rxGallery',
			resolve: {
				product: (products, $stateParams) => {
					return products.find(product => product.id === $stateParams.productId)
				}
				// product: ($transition$, ProductService) => {
					// return ProductService.read($transition$.params().personId)
				// }
			}
		})

		.state('orders', {
			url: '/orders',
			component: 'rxOrders'
		})

}