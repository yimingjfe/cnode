import "babel-polyfill"
import Vue from 'vue'
import App from './views/App.vue'
import store from './store'
import router from './router'


new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})

// store.dispatch('FETCH_TOPIC_LIST', {
// 	page: 1,
// 	limit: 2,
// 	tab: 'all'
// })