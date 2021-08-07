---
to: "src/pages/<%= h.changeCase.pascal(name) %>.vue"
---
<%
  const fileName = h.changeCase.kebab(name)
  const titleName = h.changeCase.title(name)
%><template>
    <app-layout title="<%= titleName %>"></app-layout>
</template>

<script>
import AppLayout from './layout/app-layout.vue';

export default {
    name: '<%= titleName %>',

	components: { AppLayout },

	page: {
		title: '<%= titleName %>',
	},
};
</script>

<style lang="scss" scoped></style>
