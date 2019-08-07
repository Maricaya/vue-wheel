<template>
  <div class="toast" ref="wrapper">
    <div class="message">
      <slot v-if="!enableHtml"></slot>
      <div v-else v-html="$slots.default[0]"></div>
    </div>
    <div class="line" ref="line"></div>
    <div class="close" v-if="closeButton" @click="onClickClose">{{closeButton.text}}</div>
  </div>
</template>

<script>
export default {
  name: "SweetToast",
  props: {
    autoClose: {
      type: Boolean,
      default: true
    },
    autoCloseDelay: {
      type: Number,
      default: 500
    },
    closeButton: {
      type: Object,
      default() {
        return {
          text: "关闭",
          callback: undefined
        };
      }
    },
    enableHtml: {
      type: Boolean,
      default: false
    }
  },
  created() {},
  mounted() {
    this.execAutoClose();
    this.updateStyles();
  },
  methods: {
    updateStyles() {
      this.$nextTick(() => {
        this.$refs.line.style.height = `${
          this.$refs.wrapper.getBoundingClientRect().height
        }px`;
      });
    },
    execAutoClose() {
      if (this.autoClose) {
        setTimeout(() => {
          this.close();
        }, this.autoCloseDelay * 1000);
      }
    },
    close() {
      this.$el.remove();
      this.$destroy();
    },
    onClickClose() {
      this.close();
      if (this.closeButton && typeof this.closeButton.callback === "function") {
        this.closeButton.callback(this);
      }
    }
  }
};
</script>
<style lang='scss' scoped>
$font-size: 14px;
$toast-height: 1.8;
$toast-bg: rgba(0, 0, 0, 0.75);
.toast {
  font-size: $font-size;
  height: $toast-height;
  line-height: 1.8;
  color: white;
  align-items: center;
  background: $toast-bg;
  border-radius: 4px;
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  padding: 0 16px;
  .message {
    padding: 8px 0;
  }
  .close {
    padding-left: 16px;
    //  flex 元素的收缩规则。flex 元素仅在默认宽度之和大于容器的时候才会发生收缩
    flex-shrink: 0;
    cursor: pointer;
  }
  .line {
    height: 100%;
    border-left: 1px solid #666;
    margin-left: 16px;
  }
}
</style>