
import './styles/styles.scss';
import ctrl from './controllers/builderCtrl.js';
import ctrl1 from './controllers/clickerCtrl.js';
import Vue from 'vue/dist/vue.min.js';
import ctrl from './controllers/postCtrl.js';
ctrl.render();


var showMessage = new Vue({
	el: '#showMessage',
	data: {
		message: 'Hi'
	}
})
var newClicker = new Vue ({
	el: '#newClicker',
	data: {
		text: 0,
		isActive: false
	},
	methods: {
		clickMe: function() {
			if (!this.isActive) {
				this.text = 0;
				this.isActive = true;
			    setTimeout (() =>{
			    	this.isActive = false;
			    	alert(this.text);

			    }, 3000);
			};
			this.text++;	
		}
	}
})

Vue.component('message', {
	template: '<input v-model="message" @keyup.enter="saveMessage">',
	data: function() {
		return {
			message: '',
		}
	},
	methods: {
		saveMessage: function() {
			this.$emit('message-saved', this.message);
			this.message = '';
		}
	}
})

var toDoList = new Vue ({
	el: '#toDoList',
	data: {
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
	},
	methods: {
		handleMessage: function(message) {

			this.newLists.push({text: message, completed: false});
			console.log(this.newLists);
		}
	}
})
