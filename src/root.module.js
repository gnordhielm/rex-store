
import angular from 'angular'
import '@uirouter/angularjs'
import 'angular-animate'

import './root.style.scss'
import router from './root.router.js'

angular
	.module('root', ['ui.router', 'ngAnimate'])
	.config(router)

