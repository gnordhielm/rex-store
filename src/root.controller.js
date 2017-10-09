
import moment from 'moment'

angular
	.module('root')
	.controller('root.controller', controller)

function controller($transitions) { "ngInject"
	const vm = this

	vm.year = moment().format('YYYY')

	$transitions.onSuccess({}, () => {
   document.body.scrollTop = document.documentElement.scrollTop = 0;
	})


}