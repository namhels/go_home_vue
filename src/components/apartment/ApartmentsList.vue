<template>
	<ContainerMain>
		<div class="apartments-list">
			<template v-for="apartment in items">
				<slot name="apartment" v-bind:apartment="apartment"></slot>
			</template>
		</div>
	</ContainerMain>
</template>

<script>
import ContainerMain from '../shared/ContainerMain.vue'

export default {
	name: "ApartmentsList",
	components: {
		ContainerMain,
	},
	props: {
		items: {
			type: Array,
			default: () => [],
		},
	}
}
</script>

<style lang="scss" scoped>
.apartments-list {
	display: flex;
	flex-wrap: wrap;
	margin-left: -15px;
	margin-right: -15px;
}
</style>