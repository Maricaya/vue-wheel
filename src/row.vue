<template>
  <div class="row" :align="align" :style="rowStyle" :class="rowClass">
      <slot></slot>
  </div>
</template>

<script>
// 先创建了一个row，然后在创建两个col，之后再把两个col添加到页面中去，最后再把row添加到页面中去，等同于下面的代码
/**
var parentDiv = document.createElement(‘div’) //created parent
var childDiv = document.createElement(‘div’) //created child
parentDiv.appendChild(childDiv) //child mounted
document.body.appendChild(parentDiv) // parent mounted
 * 
 */
export default {
    name: 'SweetRow',
    props: {
        gutter: {
            type: [Number, String]
        },
        align: {
            type: String,
            validator(value) {
                // includes() 一个数组是否包含一个指定的值，包含返回 true。
                return ['left', 'right', 'center'].indexOf(value) >= 0 
            }
        }
    },
    computed: {
        rowStyle () {
            let {gutter} = this
            return { marginLeft: -gutter/2 + 'px', marginRight: -gutter/2+'px' }
        },
        rowClass () {
            let {align} = this
            return align && `align-${align}`
        }
    },
    created(){
    },
    mounted() {
        this.$children.forEach((vm) => {
            vm.gutter = this.gutter
        })
    }
}
</script>
<style lang='scss' scoped>
.row {
    display: flex;
    flex-wrap: wrap; // 换行
    &.align-left {
        justify-content: flex-start;
    }
    &.align-right {
        justify-content: flex-end;
    }
    &.align-center{
        justify-content: center;
    }
}
</style>