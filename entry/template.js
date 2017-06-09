import Vue from 'vue';
import template from '../vue/template.vue';
Vue.config.debug = true;//开启错误提示
new Vue({
      el: '#app',
      components: {
        'template-index': template
      }
  });