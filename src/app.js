import Vue from 'vue'
import Button from './button.vue'
import Icon from './icon.vue'
import ButtonGroup from './button-group.vue'
import Input from './input.vue'
import Row from './row.vue'
import Col from './col.vue'
import Layout from './layout.vue'
import Header from './header.vue'
import Sider from './sider.vue'
import Content from './content.vue'
import Footer from './footer.vue'
import Toast from './toast.vue'
import plugin from './plugin';

Vue.component('g-button', Button)
Vue.component('g-icon', Icon)
Vue.component('g-button-group', ButtonGroup)
Vue.component('g-input', Input)
Vue.component('g-row', Row)
Vue.component('g-col', Col)
Vue.component('g-layout', Layout)
Vue.component('g-header', Header)
Vue.component('g-sider', Sider)
Vue.component('g-content', Content)
Vue.component('g-footer', Footer)
Vue.component('g-toast', Toast)
Vue.use(plugin)

new Vue({
    el: '#app',
    data() {
        return {
            loading1: false,
            loading2: true,
            loading3: false,
            message: '1'
        }
    },
    created() {
        this.$toast('文字cahngccccc文字cahngccccccc贼唱文字cahngccccccc贼唱文字cahngccccccc贼唱文字cahngccccccc贼唱文字cahngccccccc贼唱文字cahngccccccc贼唱文字cahngccccccc贼唱文字cahngccccccc贼唱文字cahngccccccc贼唱cc贼唱', {
            enableHtml: true
        })
    },
    methods: {
        inputChange(e) {
            console.log(e.target.value)
        },
        showToast() {
            this.$toast('我是 message')
        },
        onClickButton () {
            this.$toast('你知道我在等你吗？', {
                closeButton: {
                    text: '知道了',
                    callback: () => {
                        window.alert('他说知道了')
                    }
                }
            })
        }
    }
})