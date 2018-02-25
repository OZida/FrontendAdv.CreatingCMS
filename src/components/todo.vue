<template>
	<div id="toDoList">
				
		<div @message-saved="handleMessage">
			<input v-model="message" @keyup.enter="saveMessage">
		</div>

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
				saveMessage: function() {
					this.$emit('message-saved', this.message);
					this.message = '';
				},
				handleMessage: function(message) {
					this.newLists.push({text: message, completed: false});
				}
			}
		}
</script>

<style lang='scss' scoped> 

@import '../styles/_reset.scss';
@import '../styles/_var.scss';

	#toDoList {
		@extend .interface_by_Vue;
		
		ul {
			list-style: none;
			margin-left: 20px;
		}
	}
</style>