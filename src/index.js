
import './styles/styles.scss';
// import ctrl from './controllers/builderCtrl.js';
// import ctrl1 from './controllers/clickerCtrl.js';
import Vue from 'vue/dist/vue.min.js';
// import ctrl from './controllers/postCtrl.js';
import VueResource from "vue-resource";
import todo from './components/todo.vue';
import newClicker from './components/newClicker.vue';
import pugTest from './components/pugTest.vue';
import profile from './components/profile.vue';
import newPosts from './components/newPosts.vue';
// ctrl.render();

Vue.use(VueResource)

new Vue ({
	el:'#app',
	template: '<div> <todo/> <new-clicker/> <pug-test/> <profile/> <new-posts/> </div>',
	components: {
		todo: todo,
		newClicker: newClicker,
		pugTest: pugTest,
		profile: profile,
		newPosts: newPosts
	}
})