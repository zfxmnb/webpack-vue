import Vue from 'Vue'
import info from '../vue/info.vue'
Vue.config.debug = true;//开启错误提示
window.onload = function () {
  new Vue({
      el: '#app',
      components: {
        'temp-info': info
      }
  });
}