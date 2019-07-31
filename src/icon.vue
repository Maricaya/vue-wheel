<template>
  <svg class="g-icon">
    <use :xlink:href="`#i-${name}`" />
  </svg>
</template>
<script>
import './svg'
export default {
  name: 'SweetIcon',
  props: {
    name: {
      type: String
    }
  }
};
</script>
<style lang="scss" scoped>
.g-icon {
    width: 1em;
    height: 1em;
}
</style>
