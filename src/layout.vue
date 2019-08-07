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
      if (vm.$options.name === "SweetSider") {
        this.layoutClass.hasSider = true;
      }
    });
  }
};
</script>
<style lang='scss' scoped>
.layout {
  flex-grow: 1;
  display: flex;
  flex-direction: column; // 竖直轴，水平放置
  &.hasSider {
    flex-direction: row; // row 从左到右的水平轴
  }
}
</style>