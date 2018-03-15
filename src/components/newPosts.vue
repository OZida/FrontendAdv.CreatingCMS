<template>
	<div id="new_posts">
		<h2>New Posts</h2>
		<div class='new_posts_item' v-for="post in posts">
			<h3>{{ post.title }}</h3>
			<p>{{ post.body }}</p>
		</div>
	</div>	
</template>

<script>

export default {
  data () {
    return {
      posts: []
    }
  },
  created: function() {
    fetch('https://jsonplaceholder.typicode.com/posts').then((r) => r.json()).then(json => {this.posts = json});
    // fetch('https://jsonplaceholder.typicode.com/posts').then((r) => r.json()).then(json => console.log(json));          //чтоб вывести в консоль
  }
}
</script>

<style lang="scss" scoped>

@import '../styles/_reset.scss';
@import '../styles/_var.scss';

	#new_posts {
		margin-top: 40px;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-around;
		background-color: $purple;
		
		h2 {
			display: none;
		}
		.new_posts_item {
			@extend .interface_tile;
			border-radius: 10px;
			background-color: $light_purple;
			color: $dark_violet;

			h3 {
				text-align: center;
				font-weight: bolder;
			}
		}
	}

	@media print {

	#adaptiv {

		#new_posts {
			margin-top: 40px;
			display: flex;
			flex-direction: column;
			justify-content: space-around;
			background-color: none;	

			h2 {
				display: block;
				text-align: center;
			}
			.new_posts_item {
				/*height: 17%;*/
				width: 100%;
				background-color: none;
				color: $dark_black;
				margin: 5px;
				padding: 5px;

				h3 {
					margin: 0;
					text-align: center;
					font-weight: bolder;
				}
				p {
					text-align: left;
					/*margin-top: 5px*/;
					margin: 0;
				}
			}
		}
	}
}	
</style>