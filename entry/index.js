import Vue from 'vue';
import VueRouter from 'vueRouter';
import template from '../vue/template.vue';
import test from '../vue/test.vue';
import index from '../vue/index.vue';
import 'style/style.scss';
import 'style/animation.scss';
import utils from 'js/global.js';

//console.log(utils);
Vue.use(VueRouter);
Vue.config.debug = true;//开启错误提示
var routes = [
  { path: '/home', component: index },
  { path: '/home/test', component:test },
  { path: '/about', component: template },
  { path: '/', component: index },
  { path: '*', component: {template:"<div>404</div>" }}
];

var router = new VueRouter({ 
  routes // （缩写）相当于 routes: router
})

new Vue({
	el: '#app',
	data:{
		transitionName:'',
		data:window.initialData,
		dataString:123123+JSON.stringify(window.initialData)
	},
	router,
	watch: {
		'$route':function(to, from) {
			var toPath=to.path.split('/'),fromPath=from.path.split('/');
			if(toPath[1]!= fromPath[1]){
				this.transitionName='fade';
			}else{
				console.log(to.path.split('/')+""+from.path.split('/'))
				var toDepth = to.path.split('/').length;
				var fromDepth = from.path.split('/').length;
				this.transitionName = toDepth < fromDepth ? 'back' : 'go';
			}
		}
	}
});

