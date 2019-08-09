// const expect = chai.expect;
// import Vue from 'vue'
// import Tabs from '../src/tabs/tabs.vue'
// import TabsHead from '../src/tabs/tabs-head.vue'
// import TabsBody from '../src/tabs/tabs-body.vue'
// import TabsItem from '../src/tabs/tab-item.vue'
// import TabsPane from '../src/tabs/tab-pane.vue'

// Vue.component('g-tabs', Tabs)
// Vue.component('g-tabs-head', TabsHead)
// Vue.component('g-tabs-body', TabsBody)
// Vue.component('g-tabs-item', TabsItem)
// Vue.component('g-tabs-pane', TabsPane)

// Vue.config.productionTip = false
// Vue.config.devtools = false
// describe('TabsItem', () => {
//     it('存在.', () => {
//         expect(TabsItem).to.be.ok
//     })
//     it('接受 name 属性', () => {
//         const Constructor = Vue.extend(TabsItem)
//         const vm = new Constructor({
//             propsData: {
//                 name: 'xxx'
//             }
//         }).$mount()
//         // const useElement = vm.$el.querySelector('use')
//         console.log(vm.$el)
//         expect(vm.$el.getAttribute('name')).to.equal('xxx')
//         vm.$destroy()
//     })
//     // it('点击 button 触发 click 事件', () => {
//     //     const Constructor = Vue.extend(Button)
//     //     const vm = new Constructor({
//     //         propsData: {
//     //             icon: 'settings',
//     //         }
//     //     }).$mount()
//     //     // sinon是一个库，fake假的函数
//     //     const callback = sinon.fake();
//     //     vm.$on('click', callback)
//     //     vm.$el.click()
//     //     expect(callback).to.have.been.called

//     // })
// })