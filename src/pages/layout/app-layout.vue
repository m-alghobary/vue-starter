<template>
	<v-container fluid class="px-5 pb-8">
		<div class="pt-3">
			<div v-if="!!title" class="d-flex">
				<h1 class="text-xl">
					<v-icon color="primary" left>mdi-bookmark-multiple</v-icon>
					<span>{{ title }}</span>
				</h1>
				<v-spacer></v-spacer>
				<slot name="actions"></slot>
			</div>
			<v-divider v-if="!!title" class="mt-3 mb-4"></v-divider>

			<slot />
		</div>
	</v-container>
</template>

<script>
export default {
	name: 'AppLayout',

	props: {
		title: {
			type: String,
			default: '',
		},
	},
};
</script>

<style lang="scss" scoped></style>
