
import _ from 'lodash'

angular
	.module('root')
	.filter('toCase', toCase)

function toCase() {
	return (str, type) => {
		switch(type) {
			case 'title':
				return _.startCase(str)
			case 'snake':
				return _.snakeCase(str)
			case 'kebab':
				return _.kebabCase(str)
			case 'camel':
				return _.camelCase(str)
			case 'pascal':
				return _.capitalize(_.camelCase(str))
			default:
				return str
		}
	}
}