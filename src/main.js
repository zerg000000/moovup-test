import Vue from 'vue'
import App from './App.vue'
import router from './router'

import VueResource from 'vue-resource'

import 'onsenui/css/onsenui-core.css'
import 'onsenui/css/onsen-css-components.css'
import VueOnsen from 'vue-onsenui'

Vue.config.productionTip = false

Vue
.use(VueOnsen)
.use(VueResource)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
