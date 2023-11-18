<!-- eslint-disable vue/valid-define-props -->
<!-- eslint-disable no-undef -->
<script setup>
defineProps(['modelValue'])
defineEmits(['update:modelValue'])
</script>

<template>
	<select :value="modelValue" @input="$emit('update:modelValue', $event.target.value)" class="custom-select">
		<option :v-for="item in formatedItems" :key="item.value" :value="item.value">{{ item.label }}</option>
	</select>
</template>

<script>
export default {
	name: "CustomSelect",
	props: {
		items: {
			type: Array,
			required: true
		}
	},
	computed: {
		listeners() {
			return {
				...this.$attrs.listeners,
				input: event => this.$emit('input', event.target.value)
			}
		},
		formatedItems() {
			return this.items.map(item => {
				return typeof item === 'object'
					? item
					: { value: item, label: item }
			})
		}
	}
}
</script>

<style lang="scss" scoped>
@import '../../assets/scss/variables';

.custom-select {
	height: 40px;
	max-width: 220px;
	width: 100%;
	border: 2px solid $main-color;
	font-size: 18px;
	outline: none;
	padding: 8px 15px;
	cursor: pointer;
	display: inline-block;
}
</style>