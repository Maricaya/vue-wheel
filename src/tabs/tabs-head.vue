<template>
  <div class="tabs-head" ref="head">
    <slot></slot>
    <div class="line" ref="line"></div>
    <div name="actions-wrapper">
      <slot name="actions"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "SweetTabsHead",
  inject: ["eventBus"],
  mounted() {
    this.eventBus.$on("update:sel", (item, vm) => {
      this.updateLinePosition(vm);
    });
  },
  methods: {
    updateLinePosition(selectedVm) {
      let { width, height, top, left } = selectedVm.$el.getBoundingClientRect();
      let { left: left2 } = this.$refs.head.getBoundingClientRect();
      this.$refs.line.style.width = `${width}px`;
      this.$refs.line.style.left = `${left - left2}px`;
    }
  }
};
</script>
<style lang='scss' scoped>
$tab-height: 40px;
$blue: blue;
$border-color: #ddd;
.tabs-head {
  display: flex;
  height: $tab-height;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  border-bottom: 1px solid $border-color;
  > .line {
    position: absolute;
    bottom: 0;
    border-bottom: 1px solid $blue;
    width: 100px;
    transition: all 350ms;
  }
  > .actions-wrapper {
    margin-left: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 1em;
  }
}
</style>