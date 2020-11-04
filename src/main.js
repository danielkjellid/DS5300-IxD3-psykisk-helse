import Vue from 'vue'
import App from './app.vue'
import router from './router'
import store from './store'

import '@/components/_globals'

Vue.config.productionTip = false

import '@/assets/css/tailwind.css'

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
