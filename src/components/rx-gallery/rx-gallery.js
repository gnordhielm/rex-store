
import template from './rx-gallery.html'

angular
	.module('root')
	.component('rxGallery', {
		template, controller,
		bindings: {
			products: '<'
		}
	})

function controller() {

	this.items = [
		{
			name: 'Plaid Horse Blanket',
			date: 1506927600000,
			description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab odit accusamus ipsa blanditiis unde repellat, animi quis iste facere impedit rem laboriosam obcaecati provident commodi? Dolorum esse incidunt ea, dolore accusantium, quisquam reprehenderit ducimus, voluptatem vero aperiam tenetur, libero fugiat."	
		},
		{
			name: 'Dog Gazebo',
			date: 1506495600000,
			description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab odit accusamus ipsa blanditiis unde repellat, animi quis iste facere impedit rem laboriosam obcaecati provident commodi? Dolorum esse incidunt ea, dolore accusantium, quisquam reprehenderit ducimus, voluptatem vero aperiam tenetur, libero fugiat."	
		},
		{
			name: 'Guardian Farm Banner',
			date: 1499670000000,
			description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab odit accusamus ipsa blanditiis unde repellat, animi quis iste facere impedit rem laboriosam obcaecati provident commodi? Dolorum esse incidunt ea, dolore accusantium, quisquam reprehenderit ducimus, voluptatem vero aperiam tenetur, libero fugiat."	
		}
	]

}