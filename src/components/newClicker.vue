<template>
	<div id="newClicker">
		<p>How many times can you click in 3 seconds?</p>
		<input type="text" v-model='text'><br>
		<button v-on:click='clickMe'>click me</button>
	</div>
</template>


<script>
	export default {
		data: function() {
			return {
				text: 0,
				isActive: false
			}
		},
		methods: {
			clickMe: function() {
				if (!this.isActive) {
					this.isActive = true;
				    setTimeout (() =>{
				    	this.isActive = false;
				    	alert(this.text);
				    	this.text = 0;
			    	}, 3000);
				};
			this.text++;	
			}
		}
	}
</script>


<style lang='scss' scoped> 

@import '../styles/_reset.scss';
@import '../styles/_var.scss';

#newClicker {
	@extend .interface_by_Vue;
	
	input {
		margin-top: 20px;
		text-align: center;
		background-color: $light_purple;
		color: $dark_purple;
		height: 20px;
		border: 1px solid $light_purple;
		font-size: 18px;
	}
	button {
		color: $light_purple;
		background-color: $purple;
		font-size: 18px;
		padding: 10px;
		margin: 20px 0;
		border-radius: 20px;
		border: 1px solid $light_purple;
		text-transform: uppercase;
		box-sizing: border-box;
		cursor: pointer;
		&:hover {
			background-color: $purple_hover;
			transition: 0.5s all ease;
		}
		&:focus {
			outline: none;
		}
	}
}	
</style>