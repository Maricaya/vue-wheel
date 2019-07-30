<template>
  <button @click="$emit('click')" class="g-button" :class="{[`icon-${iconPosition}`] : true}">
    <g-icon class="icon" v-if="icon && !loading" :name="`${icon}`"></g-icon>
    <g-icon class="loading icon" v-if="loading" name="loading"></g-icon>
    <div class="content">
      <slot></slot>
    </div>
  </button>
</template>
<script>
// import Vue from "vue"
import Icon from './icon'
// Vue.component('g-icon', Icon)

export default {
  //   props: ["icon", "iconPosition"]
  components: {
    'g-icon': Icon
  },
  props: {
    icon: {},
    loading: {
      type: Boolean,
      defalut: false
    },
    iconPosition: {
      type: String,
      dafault: "left",
      validator(value) {
        //   属性检查器
        return value === "left" || value === "right";
      }
    }
  }
};
</script>
<style lang="scss">
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.g-button {
  font-size: var(--font-size);
  height: var(--button-height);
  /* 没有宽度 */
  padding: 0 1em;
  border-radius: var(--border-radius);
  border: 1px solid var(--border-color);
  background: var(--button-bg);
  display: inline-flex;
  justify-content: center;
  align-items: center;
  vertical-align: middle;
  &:hover {
    border-color: var(--border-color-hover);
  }
  &:active {
    background-color: var(--button-active-bg);
  }
  &:focus {
    outline: none;
  }
  //  通过css来控制顺序
  > .icon {
    order: 1;
    margin-right: 0.1em;
  }
  > .content {
    order: 2;
  }
  &.icon-right {
    > .icon {
      order: 2;
      margin-left: 0.1em;
      margin-right: 0;
    }
    > .content {
      order: 1;
    }
  }
  .loading {
    animation: spin 1s infinite linear;
  }
}
</style>
