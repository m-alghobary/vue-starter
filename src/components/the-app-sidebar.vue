<template>
	<v-navigation-drawer v-model="drawer" :mini-variant.sync="mini" permanent app>
		<v-list-item class="px-2 py-[3.5px]">
			<v-list-item-avatar color="primary">
				<v-img src="https://randomuser.me/api/portraits/thumb/men/75.jpg" />
			</v-list-item-avatar>

			<v-list-item-title>
				<h3 class="text-lg uppercase font-medium tracking-wide">{{ title }}</h3>
			</v-list-item-title>

			<v-btn icon @click.stop="mini = !mini">
				<v-icon>mdi-chevron-left</v-icon>
			</v-btn>
		</v-list-item>

		<v-divider></v-divider>

		<v-list>
			<v-list-item-group color="primary">
				<v-list-item v-for="item in items" :key="item.title" link :to="item.to">
					<v-list-item-icon>
						<v-icon>{{ item.icon }}</v-icon>
					</v-list-item-icon>

					<v-list-item-content>
						<v-list-item-title>{{ item.title }}</v-list-item-title>
					</v-list-item-content>
				</v-list-item>
			</v-list-item-group>
		</v-list>
	</v-navigation-drawer>
</template>

<script>
import appConfig from '@src/app.config.json';

export default {
	name: 'TheAppSidebar',

	data: () => ({
		drawer: true,
		items: [
			{ title: 'Home', icon: 'mdi-home-city', to: '/' },
			{ title: 'Users', icon: 'mdi-account-group-outline', to: '/users' },
		],
		mini: true,

		title: appConfig.name,
	}),

	computed: {
		avatarLetters() {
			const words = this.title.toUpperCase().split(' ');
			return words.length > 0 ? `${words[0][0]}${words[1][0]}` : words[0][1];
		},
	},
};
</script>

<style lang="scss" scoped></style>
