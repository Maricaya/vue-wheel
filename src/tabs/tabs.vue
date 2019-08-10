<template>
  <div class="tabs">
    <slot></slot>
  </div>
</template>

<script>
import Vue from "vue";
export default {
  name: "SweetTabs",
  props: {
    selected: {
      type: String | Number,
      required: true
    },
    direction: {
      type: String,
      default: "horizontal",
      validator(value) {
        return ["horizontal", "vertical"].indexOf(value) >= 0;
      }
    }
  },
  data() {
    return {
      eventBus: new Vue()
    };
  },
  provide() {
    return {
      eventBus: this.eventBus
    };
  },
  mounted() {
    this.selectTab();
    this.checkChildren();
  },
  methods: {
    // vm.$options 读取vm中自定义的属性
    checkChildren() {
      if (this.$children.length === 0) {
        console &&
          console.warn &&
          console.warn("tabs的组件应该是tab-head和tabs-nav，但你没写子组件");
      }
    },
    selectTab() {
      this.$children.forEach(vm => {
        if (vm.$options.name === "SweetTabsHead") {
          vm.$children.forEach(childVm => {
            if (
              childVm.$options.name === "SweetTabsItem" &&
              childVm.name === this.selected
            ) {
              this.eventBus.$emit("update:sel", this.selected, childVm);
            }
          });
        }
      });
    }
  }
};
</script>
<style lang='scss' scoped>
</style>