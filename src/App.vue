<template>
	<v-app>
		<v-main>
			<router-view :key="$route.fullPath" />
		</v-main>
	</v-app>
</template>

<script>
export default {
	name: 'App',

	page: {
		titleTemplate(title) {
			title = typeof title === 'function' ? title(this.$store) : title;
			return title ? `${title} | Vue template` : 'Home';
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
