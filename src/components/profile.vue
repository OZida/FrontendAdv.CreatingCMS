<template>
	<pre>
		{{lists}}
	</pre>
</template>


<script>
	data(){
		lists: []
	},
	created(){
		fetch(url = 'https://jsonplaceholder.typicode.com/posts').then((r) => r.json()).then(json => this.lists = json);
	}
</script>

<!-- scss -->
<style> 


</style>