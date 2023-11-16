<template>
  <button v-bind="$attrs" v-bind:type="type" :class="{btn: true, 'btn--outlined': outlined}">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'ButtonF',
  props: {
    type: {
      type: String,
      default: 'button',
      required: true,
    },
    outlined: {
      type: Boolean,
      default: false,
    }
  }
}
</script>

<style lang="scss" scoped>
  .btn {
    display: inline-block;
    padding: 8px 16px;
    font-size: 18px;
    background: #FF662D;
    color: #fff;
    cursor: pointer;
    min-width: 220px;
    border: 1px solid transparent;
    &--outlined {
      background: none;
      border: 1px solid #FF662D;
      color: #FF662D;
    }
  }

</style>