const expect = chai.expect
import Vue from 'vue'
import Toast from '../src/toast'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Toast', () => {
    // BDD 行为驱动测试 Mocha
    it('存在.', () => {
        expect(Toast).to.exist
    })
    describe('props', () => {
        // done 基于回调的异步测试
        it('接受 autoClose', (done) => {
            const div = document.createElement('div')
            document.body.appendChild(div)
            const Constructor = Vue.extend(Toast)
            const vm = new Constructor({
                propsData: {
                    autoClose: 1
                }
            }).$mount(div)
            vm.$on('close', () => {
                // 调用close之后，组件不存在
                expect(document.body.contains(vm.$el)).to.eq(false)
                done()
            })
        })
        it('接受 closeButton', () => {
            // create a basic fake, with no behavior
            const callback = sinon.fake()
            const Constructor = Vue.extend(Toast)
            const vm = new Constructor({
                propsData: {
                    closeButton: {
                        text: '关闭吧',
                        callback
                    }
                }
            }).$mount()
            let closeButton = vm.$el.querySelector('.close')
            expect(closeButton.textContent.trim()).to.eq('关闭吧')
            closeButton.click()
            expect(callback).to.have.been.called
        })
        it('接受enableHtml', () => {
            const Constructor = Vue.extend(Toast)
            const vm = new Constructor({
                propsData: {
                    enableHtml: true
                }
            })
            vm.$slots.default = ['<strong id="test">hi</strong>']
            vm.$mount()
            let strong = vm.$el.querySelector('#test')
            expect(strong).to.exist
        })
        it('接受position', () => {
            const Constructor = Vue.extend(Toast)
            const vm = new Constructor({
                propsData: {
                    position: 'bottom'
                }
            }).$mount()
            expect(vm.$el.classList.contains('position-bottom')).to.eq(true)
        })
    })
})