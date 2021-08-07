<template>
	<div class="relative py-3 sm:max-w-xl sm:mx-auto mt-16">
		<div
			class="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-500 shadow-lg transform -skew-y-4 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"
		></div>
		<div class="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20 text-center">
			<h1 class="text-9xl text-gray-700 font-extrabold tracking-wide font-mono">404</h1>
			<p class="mt-6 text-4xl uppercase">Not found</p>
			<p class="text-lg">We cannot find the page you request!</p>
			<v-btn text> <v-icon left>mdi-arrow-left</v-icon> Back to home</v-btn>
		</div>
	</div>
</template>

<script>
export default {
	name: 'NotFound',

	page: {
		title: 'Page not found',
	},
};
</script>

<style lang="scss"></style>
