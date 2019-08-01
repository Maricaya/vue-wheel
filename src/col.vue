<template>
  <div
    class="col"
    :class="[span && `col-${span}`, offset && `offset-${offset}`]"
    :style="{marginLeft: gutter/2+'px', marginRight: gutter/2 + 'px'}"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "SweetCol",
  props: {
    span: {
      type: [Number, String],
    },
    offset: {
      type: [Number, String],
    },
    gutter: {
      type: [Number, String],
    }
  },
  data() {
    return {
    }
  },
  created() {
    console.log("col created");
  },
  mounted() {
    console.log("col mounted");
  }
};
</script>
<style scoped lang="scss">
.col {
  background: #ccc;
  border: 1px solid #999;
  width: 100%;
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
  $class-prefix: offset-;
  @for $n from 1 through 24 {
    &.#{$class-prefix}#{$n} {
      margin-left: ($n / 24) * 100%;
    }
  }
}
</style>