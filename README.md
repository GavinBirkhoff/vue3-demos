# vue3-demos
💡Study the characteristics of Vue API
Vue.js 的核心是一个允许采用简洁的模板语法来声明式地将数据渲染进 DOM 的系统
## 基础
### 应用 & 组件实例
```js
const appData = {
    data(){
        return {
            counter:0
        }
    },
    mounted() {
        setInterval(() => {
          this.counter++
        }, 1000)
    }
}
const app = Vue.createApp(appData)
const vm = app.mount('#app')

console.log(app)
console.log(vm)
```
在 data 中定义的 property 是通过组件实例暴露的
Vue 还通过组件实例暴露了一些内置 property，如 $attrs 和 $emit。
### 模板语法
#### 插值
文本,原始HTML,Attribute,JS表达式
```js
{{ number + 1 }} 
{{ ok ? 'YES' : 'NO' }} 
{{ message.split('').reverse().join('')}}

<div v-bind:id="'list-' + id"></div>
```
#### 指令
指令:参数.修饰符
```js
<a v-bind:[attributeName]="url"> ... </a>
<a v-on:[eventName]="doSomething"> ... </a>
```
v-bind: 缩写成 :
v-on: 缩写成 @

