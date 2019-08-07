import Toast from './toast.vue'
export default {
  install (Vue, options) {
    Vue.prototype.$toast = function(message) {
      // 1、创建构造器，定义好提示信息的模板
      let Constructor = Vue.extend(Toast) 
      console.log(Constructor)
      // 2、创建实例，挂载到文档以后的地方
      let toast = new Constructor()
      console.log(toast)
      toast.$slots.default = [message]
      toast.$mount()
      console.log(toast)
      // 3、把创建的实例添加到body中
      document.body.appendChild(toast.$el)
    }
  }
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
 * 
 */
