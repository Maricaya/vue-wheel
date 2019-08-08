<template>
  <div class="tabs-item" @click="onClick" :class="classes" :name="name">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "SweetTabsItem",
  inject: ["eventBus"],
  data() {
    return {
      active: false
    };
  },
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    name: {
      type: String | Number,
      required: true
    }
  },
  computed: {
    classes() {
      return {
        active: this.active,
        disabled: this.disabled
      };
    }
  },
  /**
   * eg.
    vm.$on('test', function (msg) {
      console.log(msg)
    })
    vm.$emit('test', 'hi')
    // => "hi"
*/
  created() {
    if (this.eventBus) {
      this.eventBus.$on("update:selected", name => {
        this.active = name === this.name;
      });
    }
  },
  methods: {
    onClick() {
      if (this.disabled) return;
      this.eventBus.$emit("update:selected", this.name, this);
    }
  }
};
</script>
<style lang='scss' scoped>
$blue: blue;
$disabled-text-color: grey;
.tabs-item {
  flex-shrink: 0;
  padding: 0 1em;
  cursor: pointer;
  height: 100%;
  display: flex;
  align-items: center;
  &.active {
    color: $blue;
    font-weight: bold;
  }
  &.disabled {
    color: $disabled-text-color;
    cursor: not-allowed;
  }
}
</style>