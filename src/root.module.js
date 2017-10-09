
import '@uirouter/angularjs'
import 'angular-animate'

angular
	.module('root', [
		'ui.router', 
		'ngAnimate'
	])
	.config($locationProvider => { "ngInject"
		$locationProvider.hashPrefix('')
	})

