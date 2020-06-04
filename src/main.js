import Vue from 'vue'
import App from './App.vue'
import Day1 from './components/Day1.vue'

Vue.config.productionTip = false


//define your routes
const routes = [
//route for the home route of the web page
  { path: '/', component: App },
//route for the about route of the web page
  { path: '/day1', component: Day1 }
]

new Vue({
  render: h => h(App),
  routes
}).$mount('#app')
