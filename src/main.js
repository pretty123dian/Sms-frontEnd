import Vue from 'vue'
import App from './App.vue'

//tailwind
import "tailwindcss/tailwind.css"

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
