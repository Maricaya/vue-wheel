<template>
  <div class="toast">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "SweetToast"
};
</script>
<style lang='scss' scoped>
$font-size: 14px;
$toast-height: 1.8;
.toast {
  font-size: $font-size;
  height: $toast-height;
  line-height: 1.8;
  color: white;
  align-items: center;
  background: red;
}
</style>