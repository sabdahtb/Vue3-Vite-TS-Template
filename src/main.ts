import { createApp } from 'vue'

import importUiFramework from './utils/import-ui-framework'
import router from './routes/index'
import { store, key } from './store/index'

import './style.css'
import App from './App.vue'

const app = createApp(App)
importUiFramework(app).use(router).use(store, key).mount('#app')
