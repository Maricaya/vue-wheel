<template>
  <button class="g-button" :class="{[`icon-${iconPosition}`] : true}">
    <g-icon v-if="icon" :name="`${icon}`"></g-icon>
    <div class="content">
      <slot></slot>
    </div>
  </button>
</template>
<script>
export default {
  //   props: ["icon", "iconPosition"]
  props: {
    icon: {},
    iconPosition: {
      type: String,
      dafault: "left",
      validator(value) {
        //   属性检查器
        return value === "left" || value === "right"
        // if (value !== "left" && value !== "right") {
        //   return false;
        // } else {
        //   return true;
        // }
      }
    }
  }
};
</script>
<style lang="scss">
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
}
</style>
