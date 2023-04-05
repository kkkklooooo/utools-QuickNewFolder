import { createApp } from 'vue'
import App from './App.vue'
import bootstrapcss from "./dist/css/bootstrap.css"
//import bootstrapjs from "./dist/js/bootstrap.bundle.js"
//import './assets/main.css'

createApp(App).use(bootstrapcss).mount('#app')
