import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

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
		component: () => import(/* webpackChunkName: "works" */ '../views/Works.vue')
	},
	{
		path: '/works/:slug',
		name: 'works-article',
		component: () => import(/* webpackChunkName: "works" */ '../views/WorksArticle.vue')
	},
	{
		path: '/contact',
		name: 'contact',
		component: () => import(/* webpackChunkName: "contact" */ '../views/Contact.vue')
	}
	// {
	// 	path: '/contact/resume',
	// 	name: 'resume',
	// 	component: () => import(/* webpackChunkName: "contact" */ '../views/Resume.vue')
	// },
];

const router = new VueRouter({
	base: process.env.BASE_URL,
	routes,
	linkActiveClass: 'is-active'
});

export default router;
