import Vue from "vue";

const Button = Vue.component('Btn-first', {
  render(createElement) {
    return createElement('button', this.$slots.default);
  },
});

export default Button;
