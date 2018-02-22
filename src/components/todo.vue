<template>
	<div id="toDoList">
				
		<message @message-saved="handleMessage"></message>

		<ul>
			<li v-for='list in lists'  
				v-bind:class="{strike: list.isDone}">{{list.text}} 
				<input type="checkbox" v-model="list.isDone"></li>
			<li v-for='message in newLists'
				v-bind:class="{strike: message.completed}">
				{{message.text}}
				<input type="checkbox" v-model="message.completed"></li>
		</ul>
	</div>
</template>

<script>
	export default {
		data: function() {
			return {
				lists: [
				{text:'сделать домашнее задание',
				isDone: false
				},
				{text:'приготовить ужин',
				isDone: false
				},	
				{text:'убрать в квартире',
				isDone: false
				},		
				{text:'посмотреть фильм',
				isDone: false
				}
				],
				newLists: []
				}
			},
			methods: {
				handleMessage: function(message) {

					this.newLists.push({text: message, completed: false});
					console.log(this.newLists);
						}
				}
		}
</script>

<style>
	#toDoList {
		@extend .interface_by_Vue;
		
		ul {
			list-style: none;
			margin-left: 20px;
		}
	}
</style>