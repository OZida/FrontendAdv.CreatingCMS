<template>
	<div>
		<div v-for="post in posts">
			<h3>{{ post.title }}</h3>
			<p>{{ post.body }}</p>
		</div>
	</div>	
</template>

<script>

export default {
  data () {
    return {
      // endpoint: 'https://jsonplaceholder.typicode.com/posts',
      posts: []
    }
  },
  // methods: {
  //   handlePosts: function() {
  //     this.$http.get(this.endpoint).then(json => {this.posts = json.data});
  //   }
  // },
  created: function() {
    // this.handlePosts();
    fetch('https://jsonplaceholder.typicode.com/posts').then((r) => r.json()).then(json => {this.posts = json.data});
    // fetch('https://jsonplaceholder.typicode.com/posts').then((r) => r.json()).then(json => console.log(json));          //чтоб вывести в консоль
  }
}
</script>

<style lang="scss" scoped>

@import '../styles/_reset.scss';
@import '../styles/_var.scss';
	
</style>