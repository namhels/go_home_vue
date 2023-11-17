<template>
	<ContainerMain>
		<div class="apartments-list">
			<ApartmentsItem v-for="{ id, descr, rating, imgUrl, price } in items" :key="id" :descr="descr" :rating="rating"
				:imgSrc="imgUrl" :price="price" />
		</div>
	</ContainerMain>
</template>

<script>
import ApartmentsItem from "./ApartmentsItem"
import ContainerMain from '../shared/ContainerMain.vue'

export default {
	name: "ApartmentsList",
	components: {
		ApartmentsItem,
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