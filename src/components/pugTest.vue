<template lang='pug'>
	div
		div {{msg}}
		input#file(type='file')
		p {{file.message}}
</template>	


<script>
	export default {
		data(){
			return {
			msg: "hallo!",
			file: {message: ''}
			}
		},
		mounted() {
				let input = document.getElementById('file');
				let output = this.file;
				// console.log(input);

				input.onchange = function(){

					// console.log(this);
					let list = this.files;
					let file = list[0];
					let reader = new FileReader();
					// console.log(file);

					reader.onloadend = function(event){
						let text = event.target.result;
						console.log(text);
						output.message = text;
					}
					reader.readAsText(file);
				}
		
		}
	}

</script>