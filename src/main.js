import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import './styles/index.scss'
import cookieStore from './utils/cookieStore'

Vue.config.productionTip = false
cookieStore.set('r_sort_type', 'score')
router.beforeEach((to, from, next) => {
  next()
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
