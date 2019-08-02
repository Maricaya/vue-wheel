<template>
  <div class="col" :class="colClass" :style="colStyle">
    <div style="border: 1px solid green; height: 100px">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "SweetCol",
  props: {
    span: {
      type: [Number, String]
    },
    offset: {
      type: [Number, String]
    }
  },
  data() {
    return {
      gutter: 0
      // 写在data中，只会在一开始的时候去读一次colStyle，如果后面gutter变了，写在data里的gutter不会变。
      //   colStyle: {
      //     paddingLeft: this.gutter / 2 + "px",
      //     paddingRight: this.gutter / 2 + "px"
      //   }
    }
  },
  computed: {
    colClass(){
        let {span,offset} = this
        // console.log(1 && 100000)
        return [
            span && `col-${span}`,
            offset && `offset-${offset}`,
        ]
    },
    colStyle() {
      return {
        marginLeft: this.gutter / 2 + "px",
        marginRight: this.gutter / 2 + "px"
      }
    }
  },
  created() {},
  mounted() {}
};
</script>
<style scoped lang="scss">
.col {
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