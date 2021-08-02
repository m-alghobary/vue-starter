<template>
	<v-app>
		<the-app-navbar />
		<the-app-sidebar />
		<v-main>
			<v-container fluid>
				<router-view :key="$route.fullPath"></router-view>
			</v-container>
		</v-main>
	</v-app>
</template>

<script>
import appConfig from '@src/app.config.json';

import TheAppNavbar from '@components/the-app-navbar.vue';
import theAppSidebar from '@components/the-app-sidebar.vue';

export default {
	name: 'App',

	components: { theAppSidebar, TheAppNavbar },

	page: {
		titleTemplate(title) {
			title = typeof title === 'function' ? title(this.$store) : title;
			return title ? `${title} | ${appConfig.name}` : 'Home';
		},
	},

	data: () => ({
		//
	}),
};
</script>

<style lang="scss">
@import '~nprogress/nprogress.css';
</style>
