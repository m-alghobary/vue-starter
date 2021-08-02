const appConfig = require('./src/app.config.json');

module.exports = {
	transpileDependencies: ['vuetify'],

	chainWebpack(config) {
		// We provide the app's title in Webpack's name field, so that
		// it can be accessed in index.html to inject the correct title.
		config.set('name', appConfig.name);

		// Set up all the aliases we use in our app.
		config.resolve.alias.clear().merge(require('./aliases.config').webpack);

		// Only enable performance hints for production builds,
		// outside of tests.
		config.performance.hints(process.env.NODE_ENV === 'production' && !process.env.VUE_APP_TEST && 'warning');
	},
	css: {
		// Enable CSS source maps.
		sourceMap: true,
	},
};
