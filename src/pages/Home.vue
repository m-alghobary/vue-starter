<template>
	<app-layout title="Home"></app-layout>
</template>

<script>
import AppLayout from './layout/app-layout.vue';

export default {
	name: 'Home',

	components: { AppLayout },

	page: {
		title: 'Home',
	},
};
</script>
