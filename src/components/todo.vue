<template>
	<div id="todo">
				
		
		<input v-model="message" @keyup.enter="saveMessage">
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
				message: '',
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
					// this.newLists.push({text: message, completed: false});
				},
				saveMessage: function() {
					this.newLists.push({text: this.message, completed: false});
					this.message = '';
				}
			}
		}
</script>

<style lang='scss' scoped> 

@import '../styles/_reset.scss';
@import '../styles/_var.scss';

	#todo {
		@extend .interface_by_Vue;
		color: $light_black;
		
		ul {
			list-style: none;
			margin-left: 20px;
		}
		.strike {
	    text-decoration: line-through;
	    color: $light_red;
		}
	}
</style>