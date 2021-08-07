export default [
	{
		path: '/',
		name: 'Home',
		component: () => import('@pages/Home.vue'),
	},

	// auto generated code will be injected here 👇🏼

	// ROUTES_HYGEN_SLOT

	{
		path: '/404',
		name: '404',
		component: require('@pages/errors/404.vue').default,

		props: true,
	},

	// Redirect any unmatched routes to the 404 page.
	{
		path: '*',
		redirect: '404',
	},
];
