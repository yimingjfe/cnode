import Vue from 'vue'
import Router from 'vue-router'
import {createListView} from '../views/createListView.vue'
import App from '../App.vue' 
import HomePage from '../views/homepage.vue' 
import Entry from '../views/Entry.vue' 
import Login from '../components/Login.vue'
import Mine from '../views/Mine.vue'
import TopicDetail from '../views/TopicDetail.vue'
import MyCollectTopics from '../views/MyCollectTopics.vue'

Vue.use(Router)


const routes = [
  {path: '/', component: Entry, children:[
    {path: 'homepage', component: HomePage, 
      children: [
        {path: '', redirect:'all'},
        {path: 'all', component: createListView('all')},
        {path: 'good', component: createListView('good')},
        {path: 'share', component: createListView('share')},
        {path: 'ask', component: createListView('ask')},
        {path: 'job', component: createListView('job')}     
      ]},
    {path: 'mine', component: Mine, meta:{requiresAuth: true}},
    {path: 'login', component: Login},
    {path: '', redirect: 'homepage'}
  ]},
  {path: '/topic', component: TopicDetail, name: 'topic'},
  {path: '/collect-topics', component: MyCollectTopics}
];

const scrollBehavior = (to, from, savedPosition) => {
  if (savedPosition) {
    // savedPosition is only available for popstate navigations.
    return savedPosition
  } else {
    const position = {}
    // new navigation.
    // scroll to anchor by returning the selector
    if (to.hash) {
      position.selector = to.hash
    }
    // check if any matched route config has meta that requires scrolling to top
    if (to.matched.some(m => m.meta.scrollToTop)) {
      // cords will be used if no selector is provided,
      // or if the selector didn't match any element.
      position.x = 0
      position.y = 0
    }
    // if the returned position is falsy or an empty object,
    // will retain current scroll position.
    return position
  }
}


const router =  new Router({
  mode: 'history',
	routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    const vm = router.app;
    let user = vm.$store.state.user;
    if (!user || !user.id) {
      next({
        path: '/login',
        query: { redirect: to.fullPath }
      })
    } else {
      next();
    }
  } else {
    next()
  }
})

export default router