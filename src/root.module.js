
import '@uirouter/angularjs'
import 'angular-animate'

import router from './root.router.js'

angular
	.module('root', [
		'ui.router', 
		'ngAnimate'
	])
	.config(router)

