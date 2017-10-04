
export default function router($stateProvider, $urlRouterProvider) { "ngInject"
	
	$urlRouterProvider.otherwise('/')

	$stateProvider

		.state('main', {
			url: '/',
			component: 'rxHome'
		})

}