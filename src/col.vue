<template>
  <!-- <div class="col" :class="[`col-${span}`]"> -->
  <div class="col" :class="[span ? `col-${span}` : '']">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "SweetCol",
  props: {
    span: {
      type: [Number, String]
    }
  }
};
</script>
<style scoped lang="scss">
.col {
  height: 100px;
  background-color: grey;
  width: 100%;
  border: 1px solid red;
  // 设置col-1、col-2...一直到col-24，并且给他们设置不同的宽度
  $class-prefix: col-;
  @for $n from 1 through 24 {
    &.#{$class-prefix}#{$n} {
      width: ($n / 24) * 100%;
    }
  }
  // .col.col-1{width:1/24*100%};
  // .col.col-2{width:2/24*100%}
  // .....
  // col.col-24{width:24/24*100%}
}
</style>