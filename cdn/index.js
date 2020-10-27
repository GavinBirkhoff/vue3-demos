
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