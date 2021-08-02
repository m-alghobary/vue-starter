<template>
	<v-app-bar app flat class="border-b border-gray-200">
		<v-menu offset-y close-on-click class="mt-1" nudge-bottom="4px">
			<template #activator="{ on }">
				<v-avatar size="40" color="primary" class="ml-auto cursor-pointer text-white" v-on="on"> DR </v-avatar>
			</template>

			<v-list dense>
				<v-list-item-group color="primary">
					<v-list-item>
						<v-list-item-icon>
							<v-icon>mdi-account</v-icon>
						</v-list-item-icon>
						<v-list-item-content>
							<v-list-item-title>Your Profile</v-list-item-title>
						</v-list-item-content>
					</v-list-item>
					<v-list-item>
						<v-list-item-icon>
							<v-icon>mdi-cog</v-icon>
						</v-list-item-icon>
						<v-list-item-content>
							<v-list-item-title>Settings</v-list-item-title>
						</v-list-item-content>
					</v-list-item>
					<v-divider />
					<v-list-item>
						<v-list-item-icon>
							<v-icon>mdi-logout</v-icon>
						</v-list-item-icon>
						<v-list-item-content>
							<v-list-item-title>Logout</v-list-item-title>
						</v-list-item-content>
					</v-list-item>
				</v-list-item-group>
			</v-list>
		</v-menu>
	</v-app-bar>
</template>

<script>
export default {
	name: 'TheAppNavbar',

	data: () => ({}),
};
</script>

<style lang="scss" scoped></style>
