import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vant from 'vant'
import 'vant/lib/index.css'
// import VueWechatTitle from 'vue-wechat-title'
// Vue.use(VueWechatTitle)
Vue.use(require('vue-wechat-title'))

Vue.use(Vant)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
