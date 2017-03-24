import Vue from 'vue'
import Router from 'vue-router'
import {createListView} from '../views/createListView.vue'

Vue.use(Router)

const routes = [
	{path:'/all', component: createListView('all')},
	{path:'/good', component: createListView('good')},
	{path:'/share', component: createListView('share')},
	{path:'/ask', component: createListView('ask')},
	{path:'/job', component: createListView('job')},
	{path:'/', redirect: '/all'}
]

export default new Router({
	routes
})