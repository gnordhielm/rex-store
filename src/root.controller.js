
import moment from 'moment'

angular
	.module('root')
	.controller('root.controller', controller)

function controller() {
	const vm = this

	vm.year = moment().format('YYYY')
}