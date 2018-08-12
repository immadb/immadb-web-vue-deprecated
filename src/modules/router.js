import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import home from "../pages/home.vue";
import promotions from '../pages/promotions/index.vue';
import pastEvents from '../pages/events/past/index.vue';
import upcomingEvents from '../pages/events/upcoming/index.vue';
import news from '../pages/news/index.vue';

const routes = [
    {
		path: '/',
		name: 'home',
		component: home,
		meta: {
			title: 'IMMADb',
		}
	},
    {
		path: '/promotions',
		name: 'promotions',
		component: promotions,
		meta: {
			parent: 'home',
			title: 'Promotions',
		},
	},
    {
		path: '/past-events',
		name: 'past-events',
		component: pastEvents,
		meta: {
			parent: 'home',
			title: 'Past Events',
		},
	},
    {
		path: '/upcoming-events',
		name: 'upcoming-events',
		component: upcomingEvents,
		// beforeEnter: validateUser,
		meta: {
			parent: 'home',
			title: 'Upcoming Events',
		},
	},
    {
		path: '/news',
		name: 'news',
		component: news,
		// beforeEnter: validateUser,
		meta: {
			parent: 'home',
			title: 'News'
		},
	},
];

const router = new VueRouter({
	routes,
	mode: "history",
});

export default router;
