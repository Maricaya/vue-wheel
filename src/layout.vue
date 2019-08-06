<template>
  <div class="layout" :class="layoutClass">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "SweetLayout",
  data() {
    return {
      layoutClass: {
        hasSider: false
      }
    };
  },
  mounted() {
    this.$children.forEach(vm => {
        console.log(vm.$options.name)
      if (vm.$options.name === "SweetSider") {
        this.layoutClass.hasSider = true;
      }
      console.log(this.layoutClass.hasSider)
    });
  }
};
</script>
<style lang='scss' scoped>
.layout {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  &.hasSider {
    flex-direction: row;
  }
}
</style>