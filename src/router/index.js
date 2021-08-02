import Vue from 'vue';
import VueRouter from 'vue-router';
import VueMeta from 'vue-meta';
import NProgress from 'nprogress/nprogress';

import routes from './routes';

Vue.use(VueRouter);
Vue.use(VueMeta, {
	keyName: 'page',
});

NProgress.configure({
	showSpinner: false,
});

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,

	scrollBehavior(to, from, savedPosition) {
		return savedPosition || { x: 0, y: 0 };
	},

	routes,
});

router.beforeEach((to, from, next) => {
	NProgress.start();

	next();
});

router.afterEach(() => {
	NProgress.done();
});

export default router;
