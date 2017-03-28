import Vue from 'Vue'
import page from '../vue/page.vue'
Vue.config.debug = true;//开启错误提示
window.onload = function () {
  new Vue({
      el: '#appPage',
      data: {
      	
      },
      components: {
        'temp-page': page
      }
  });
}