<template>
	<div v-if="isVisible">
		<h1 v-show="false">Title Directives</h1>
		<ul>
			<template v-for="fruit in fruits" :key="fruit">
				<li v-if="fruit === 'banana'">{{ fruit }}
				</li>
			</template>
		</ul>
		<ul>
			<li v-for="(car, key) in cars" :key="car.color">{{ key }}</li>
		</ul>
	</div>
</template>

<script>
export default {
	name: "DirectivesTest",
	data() {
		return {
			isVisible: true,
			fruits: ['kivi', 'banana', 'apple'],
			cars: {
				audi: {
					color: 'red',
				},
				bmw: {
					color: 'blue',
				}
			}
		}
	}
}
</script>

<style lang="scss" scoped></style>