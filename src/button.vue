<template>
  <button class="g-button">
    <svg class="icon">
      <use :xlink:href="`#i-${icon}`"/>
    </svg>
    <slot></slot>
  </button>
</template>
<script>
export default {
    props: ['icon']
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
  &:hover {
    border-color: var(--border-color-hover);
  }
  &:active {
    background-color: var(--button-active-bg);
  }
  &:focus {
    outline: none;
  }
}
</style>
