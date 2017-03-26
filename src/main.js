import "babel-polyfill"
import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'


new Vue({
  el: '#app',
  router,
  store,
  router,
  render: h => h(App)
})

// store.dispatch('FETCH_TOPIC_LIST', {
// 	page: 1,
// 	limit: 2,
// 	tab: 'all'
// })