import { createApp } from 'vue'
import '@/assets/js/flexible.js'
import 'vant/lib/index.css';
import App from './App.vue'
import 'xgplayer/dist/index.min.css';
import router from './router'
import { createPinia } from 'pinia'

const app = createApp(App);
app.use(createPinia()).use(router).mount('#app')
