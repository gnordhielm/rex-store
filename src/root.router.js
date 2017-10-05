
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

		.state('gallery', {
			url: '/gallery',
			component: 'rxGallery'
		})

		.state('orders', {
			url: '/orders',
			component: 'rxOrders'
		})

}