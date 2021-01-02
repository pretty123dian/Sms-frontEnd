import Vue from 'vue'
import App from './App.vue'
// import router
import router from './router';
import Vuesax from 'vuesax';
//tailwind
import "tailwindcss/tailwind.css"
import "vuesax/dist/vuesax.css"

Vue.config.productionTip = false
Vue.use(Vuesax);
new Vue({
  render: h => h(App),
  router,
}).$mount('#app')

