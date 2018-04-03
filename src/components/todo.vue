<template>
	<div id="todo">
		<p>Put a mark on the implementation. If you want to add tasks - write in the field and press Enter.</p>
		<input type="text" v-model="message" @keyup.enter="saveMessage">
		<ul>
			<li v-for='list in lists'  
				v-bind:class="{strike: list.isDone}">
				{{list.text}} 
				<input type="checkbox" name="todoList" v-model="list.isDone">
			</li>
			<li v-for='message in newLists'
				v-bind:class="{strike: message.completed}">
				{{message.text}}
				<input type="checkbox" v-model="message.completed">
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		data: function() {
			return {
				message: '',
				lists: [
				{text:'do homework',
				isDone: false
				},
				{text:'make dinner',
				isDone: false
				},	
				{text:'clean in the apartment',
				isDone: false
				},		
				{text:'watch a film',
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

		input[type='text'] {
			margin: 20px 0;
			text-align: center;
			background-color: $light_purple;
			color: $dark_purple;
			height: 20px;
			border: 1px solid $light_purple;
			font-size: 18px;
			&:focus {
			outline: none;
			}
		}
		ul {
			list-style: none;
			margin-left: 20px;
			color: $light_purple;

			input[type='checkbox'] {
				width: 20px;
				height: 20px;
				cursor: pointer;
			}
		}
		.strike {
	    text-decoration: line-through;
	    color: $light_red;
		}
	}
</style>