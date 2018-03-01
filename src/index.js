
// import './styles/styles';
// // import ctrl from './controllers/builderCtrl.js';
// // import ctrl1 from './controllers/clickerCtrl.js';
import Vue from 'vue/dist/vue.min';
// // import ctrl from './controllers/postCtrl.js';
// import todo from './components/todo';
// import newClicker from './components/newClicker';
// import pugTest from './components/pugTest';
// import profile from './components/profile';
// import newPosts from './components/newPosts';
// ctrl.render();

import router from './router';

new Vue ({
	router,
	el:'#app',
	template: `<div class='byRouter'> <router-link to="/">Главная</router-link> 
					<router-link to="/todo">Список дел</router-link>
					<router-link to="/pugTest">pugTest</router-link>
					<router-link to="/profile">profile</router-link>
					<router-link to="/newPosts">newPosts</router-link>
					<router-link to="/drow">drow</router-link>  
					<router-view></router-view> 
				</div>`
	// components: {
	// 	todo: todo,
	// 	newClicker: newClicker,
	// 	pugTest: pugTest,
	// 	profile: profile,
	// 	newPosts: newPosts
	// }
})