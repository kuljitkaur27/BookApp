import Vue from 'vue'
import App from './App.vue'
import { BButton } from 'bootstrap-vue'
Vue.component('b-button', BButton)

import { CardPlugin } from 'bootstrap-vue'
Vue.use(CardPlugin)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
