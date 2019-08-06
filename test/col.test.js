const expect = chai.expect;
import Vue from "vue";
import Col from "../src/col";

Vue.config.productionTip = false;
Vue.config.devtools = false;

describe("Col", () => {
  it("存在.", () => {
    expect(Col).to.exist;
  });
  describe('props', () => {
    const div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(Col)
    let vm
    afterEach(() => {
      div.remove()
      vm.$destroy()
    })
    it('接受 span/offset 属性', () => {
      vm = new Constructor({
        propsData: {
          span: 1
        }
      }).$mount(div)
      expect(vm.$el.classList.contains('col-1')).to.eq(true)
    })
    it('接受 offset 属性', () => {
      vm = new Constructor({
        propsData: {
          offset: 1
        }
      }).$mount(div)
      expect(vm.$el.classList.contains('offset-1')).to.eq(true)
    })
    it('接受 pc/ipad 属性', () => {
      ['phone', 'pc', 'ipad', 'narrow-pc', 'wide-pc'].forEach((eventName) => {
        vm = new Constructor({
          propsData: {
            phone: {
              span: 1,
              offset: 2
            },
            pc: {
              span: 1,
              offset: 2
            },
            ipad: {
              span: 1,
              offset: 2
            },
            narrowPc: {
              span: 1,
              offset: 2
            },
            widePc: {
              span: 1,
              offset: 2
            },
          }
        }).$mount(div)
        expect(vm.$el.classList.contains('col-' + eventName + '-1')).to.eq(true)
        expect(vm.$el.classList.contains('offset-' + eventName + '-2')).to.eq(true)
      })
    })
  })
});