<template>
  <div class="col" :class="colClass" :style="colStyle">
    <div style="border: 1px solid green; height: 100px">
      <slot></slot>
    </div>
  </div>
</template>

<script>
let validator = value => {
  let valid = true;
  let keys = Object.keys(value);
  keys.forEach(key => {
    // key只能是span 或者 offset
    if (!["span", "offset"].includes(key)) {
      valid = false;
    }
  });
  return valid;
};
export default {
  name: "SweetCol",
  props: {
    span: {
      type: [Number, String]
    },
    offset: {
      type: [Number, String]
    },
    phone: { type: Object, validator },
    ipad: { type: Object, validator },
    narrowPc: { type: Object, validator },
    pc: { type: Object, validator },
    widePc: { type: Object, validator }
  },
  data() {
    return {
      gutter: 0
    };
  },
  methods: {},
  computed: {
    colClass() {
      let { span, offset, phone, ipad, narrowPc, pc, widePc } = this;
      return [
        span && `col-${span}`, // 返回后面数值
        offset && `offset-${offset}`,
        // ipad && ipad.span && `col-ipad-${ipad.span}`,
        // phone && phone.span && `col-phone-${phone.span}`,
        // narrowPc && narrowPc.span && `col-narrow-pc-${narrowPc.span}`,
        // widePc && widePc.span && `col-wide-pc-${widePc.span}`,
        // pc && pc.span && `col-pc-${pc.span}`
        ...(phone ? [`col-phone-${phone.span}`]: []),
        ...(ipad ? [`col-ipad-${ipad.span}`]: []),
        ...(pc ? [`col-pc-${pc.span}`]: []),
        ...(widePc ? [`col-wide-pc-${widePc.span}`]: []),
        ...(narrowPc ? [`col-narrow-pc-${narrowPc.span}`]: [])
      ];
    },
    colStyle() {
      // 写在data中，只会在一开始的时候去读一次colStyle，如果后面gutter变了，写在data里的gutter不会变。
      return {
        marginLeft: this.gutter / 2 + "px",
        marginRight: this.gutter / 2 + "px"
      };
    }
  },
  created() {},
  mounted() {}
};
</script>
<style scoped lang="scss">
.col {
  // width: 100%;
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
  @media (max-width: 576px) {
    $class-prefix: col-phone-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        width: ($n / 24) * 100%;
      }
    }
    $class-prefix: offset-phone-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        margin-left: ($n / 24) * 100%;
      }
    }
  }
  @media (min-width: 577px) and (max-width: 768px){
    $class-prefix: col-ipad-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        width: ($n / 24) * 100%;
      }
    }
    $class-prefix: offset-ipad-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        margin-left: ($n / 24) * 100%;
      }
    }
  }
  @media (min-width: 769px) and (max-width: 992px){
    $class-prefix: col-narrow-pc-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        width: ($n / 24) * 100%;
      }
    }
    $class-prefix: offset-narrow-pc-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        margin-left: ($n / 24) * 100%;
      }
    }
  }
  @media (min-width: 993px) and (max-width: 1200px){
    $class-prefix: col-pc-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        width: ($n / 24) * 100%;
      }
    }
    $class-prefix: offset-pc-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        margin-left: ($n / 24) * 100%;
      }
    }
  }
  @media (min-width: 1201px) {
    $class-prefix: col-wide-pc-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        width: ($n / 24) * 100%;
      }
    }
    $class-prefix: offset-wide-pc-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        margin-left: ($n / 24) * 100%;
      }
    }
  }
}
</style>