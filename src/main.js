import Vue from 'vue'
import App from './App'
import router from './routers'
import Vuetify from 'vuetify'
Vue.use(Vuetify)

const app = new Vue({
    router,
    render: h => h(App)
}).$mount('#app')