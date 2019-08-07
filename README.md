# vue-wheel - 一个vue ui组件
[![Build Status](https://travis-ci.org/Maricaya/vue-wheel.svg?branch=master)](https://travis-ci.org/Maricaya/vue-wheel)
## 介绍

学习vue的过程中制作的ui框架，希望对你有帮助。

## 开始使用
1. 添加css样式
    使用本实例前，请先开启border-box
    ```css
    *,*::before,*::after{box-sizing: border-box;}
    ```
    IE 8 及以上浏览器都支持此样式。

    你还需要设置默认颜色等变量，后续会改为scss变量。
    ```css
    :root {
        --button-height: 32px;
        --font-size: 14px;
        --button-bg: white;
        --button-active-bg: #eee;
        --border-radius: 4px;
        --color: #333;
        --border-color: #999;
        --border-color-hover: #666;
    }
    ```
    IE 15 及以上浏览器都支持此样式。

2. 安装sweet-ui(现在的名称为xlchu-wheel-1-1，后续改为sweet-ui)
```
    npm i --save sweet-ui
```

3. 引入sweet-ui
```js
    import { Button, ButtonGroup, Icon } from "sweet-ui";
    import "sweet-ui/dist/index.css";
    export default {
    name: "app",
    components: {
        HelloWorld,
        "g-button": Button,
        "g-button-group": ButtonGroup,
        "g-icon": Icon
    }
    }
```

4. 引入 svg symbols
```html
    <script src="//at.alicdn.com/t/font_1286250_8pvf91fuiu6.js"></script>
    <svg>
        <use xlink="i-setting"/>
    </svg>
```
## 文档

## 提问

## 变更记录

## 贡献代码



# 启动
npx parcel index.html --no-cache

### 参考大佬的文章
https://zhuanlan.zhihu.com/p/44212421
https://zhuanlan.zhihu.com/p/39601572
一套小巧的 Vue 组件<https://github.com/BlameDeng/xue-ui>
轱辘，面向源码阅读者的 UI 框架<https://github.com/FrankFang/gulu/commit/8f2d4d9048c49621bcbdb6681f72e29deafddb1e>