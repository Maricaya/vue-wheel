import Toast from './toast.vue'

let currentToast

export default {
  install(Vue, options) {
    Vue.prototype.$toast = function (message, toastOptions) {
      if (currentToast) {
        currentToast.close()
        // 关闭之后依旧存在，加上null之后不存在
      }
      currentToast = createToast({
        Vue,
        message,
        propsData: toastOptions,
        onClose: () => {
          currentToast = null
        }
      })
    }
  }
}

function createToast({
  Vue,
  message,
  propsData,
  onClose
}) {
  // 1、创建构造器，定义好提示信息的模板
  let Constructor = Vue.extend(Toast)
  // 2、创建实例，挂载到文档以后的地方
  let toast = new Constructor({
    propsData
  })
  //default 属性包括了所有没有被包含在具名插槽中的节点，或 v-slot:default 的内容。
  toast.$slots.default = [message]
  toast.$mount()
  toast.$on('close', onClose)
  // 3、把创建的实例添加到body中
  document.body.appendChild(toast.$el)
  return toast
}
// 开发插件
/**
 MyPlugin.install = function (Vue, options) {
  // 1. 添加全局方法或属性
  Vue.myGlobalMethod = function () {
    // 逻辑...
  }

  // 2. 添加全局资源
  Vue.directive('my-directive', {
    bind (el, binding, vnode, oldVnode) {
      // 逻辑...
    }
    ...
  })

  // 3. 注入组件选项
  Vue.mixin({
    created: function () {
      // 逻辑...
    }
    ...
  })

  // 4. 添加实例方法
  Vue.prototype.$myMethod = function (methodOptions) {
    // 逻辑...
  }
}
 */