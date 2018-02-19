
import './styles/styles.scss';
import ctrl from './controllers/builderCtrl.js';
import ctrl1 from './controllers/clickerCtrl.js';
import Vue from 'vue/dist/vue.min.js';
import ctrl from './controllers/postCtrl.js';
ctrl.render();
// ctrl.render();

var app = new Vue({
	el: '#app',
	data: {
		message: 'Hi'
	}
})
var app1 = new Vue ({
	el: '#app1',
	data: {
		text: 0,
		isActive: false
	},
	methods: {
		clickMe: function() {
			if (!this.isActive) {

				this.isActive = true;
			    setTimeout (() =>{
			    	this.isActive = false;
			    	alert(this.text);

			    }, 3000);
			};
				// isActive: true;
			this.text++;	
	
		}
	}

})

