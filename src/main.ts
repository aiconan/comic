import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false
Vue.use(require('vue-wechat-title'))

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
