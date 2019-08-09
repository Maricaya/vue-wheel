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
import plugin from './plugin'
import Tabs from './tabs/tabs.vue'
import TabsHead from './tabs/tabs-head.vue'
import TabsBody from './tabs/tabs-body.vue'
import TabsItem from './tabs/tabs-item.vue'
import TabsPane from './tabs/tabs-pane.vue';

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
Vue.component('g-tabs', Tabs)
Vue.component('g-tabs-head', TabsHead)
Vue.component('g-tabs-body', TabsBody)
Vue.component('g-tabs-item', TabsItem)
Vue.component('g-tabs-pane', TabsPane)

new Vue({
    el: '#app',
    data() {
        return {
            loading1: false,
            loading2: true,
            loading3: false,
            message: '1',
            selected: '1',
            selectedTab: 'sports'
        }
    },
    created() {
        this.$toast('文字', {
            position: 'middle',
            enableHtml: false,
            closeButton: {
                text: '记得关闭',
                callback() {
                    console.log('已经关闭了')
                }
            },
            autoClose: 1
        })
    },
    methods: {
        yyy(data){
            console.log('yyy')
            console.log(data)
        },
        inputChange(e) {
            console.log(e.target.value)
        },
        showToast() {
            this.$toast('我是 message', {
                position: 'bottom'
            })
        },
        showToast1() {
            this.$toast('我是 message', {
                position: 'top'
            })
        },
        showToast2() {
            this.$toast('我是 message', {
                position: 'middle'
            })
        },
        showToast3() {
            this.$toast('我是 message', {
                position: 'bottom'
            })
        },
        onClickButton() {
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