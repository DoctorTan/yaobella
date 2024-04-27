import { createApp } from 'vue'
import '@/assets/js/flexible.js'
import App from './App.vue'
import 'xgplayer/dist/index.min.css';
import router from './router'
import { createPinia } from 'pinia'
createApp(App).use(createPinia()).use(router).mount('#app')
