import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import MyCompanyLibrary from './my-company-library'

createApp(App).use(store).use(router).use(MyCompanyLibrary).mount('#app')
