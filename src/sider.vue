<template>
  <transition name="sider">
    <div class="sider" v-if="visible">
      <slot></slot>
      <button @click="visible=false">close</button> 
    </div>
  </transition>
</template>

<script>
// import
export default {
  name: "SweetSider",
  data() {
    return {
      visible: true
    };
  }
};
</script>
<style lang='scss' scoped>
.sider {
  position: relative;
  > button {
    position: absolute;
    top: 0;
    right: 0;
  }
}
.sider-enter-active, .slider-leave-active {
    transition: all 10s;
}
.sider-enter, .sider-leave-to {
    margin-left: -200px;
}
</style>