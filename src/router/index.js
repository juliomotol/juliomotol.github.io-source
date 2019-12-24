import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		name: 'home',
		component: Home
	},
	{
		path: '/about',
		name: 'about',
		component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
	},
	{
		path: '/works',
		name: 'works',
		component: () => import(/* webpackChunkName: "works" */ '../views/About.vue')
	},
	{
		path: '/works/:category',
		name: 'works-category',
		component: () => import(/* webpackChunkName: "works" */ '../views/About.vue')
	},
	{
		path: '/works/:category/:slug',
		name: 'works-article',
		component: () => import(/* webpackChunkName: "works" */ '../views/About.vue')
	},
	{
		path: '/contact',
		name: 'contact',
		component: () => import(/* webpackChunkName: "contact" */ '../views/About.vue')
	},
	{
		path: '/contact/resume',
		name: 'resume',
		component: () => import(/* webpackChunkName: "contact" */ '../views/About.vue')
	},
]

const router = new VueRouter({
	base: process.env.BASE_URL,
	routes
})

export default router
