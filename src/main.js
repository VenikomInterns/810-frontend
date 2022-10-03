import Vue from 'vue'
import App from './App.vue'
// import router from './router'

import './assets/scss/app.scss'
import 'bootstrap'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

// Vue.use(router)


// import router from './router'
//
// // import { createApp } from 'vue'
// // import App from './App.vue'
// import router from './router'
// // import {Vue} from "vue/types/vue";
//
// // createApp(App).use(router).mount('#app')
//
// const app = Vue.createApp({})
// // Make sure to _use_ the router instance to make the
// // whole app router-aware.
// app.use(router)
//
// app.mount('#app')
