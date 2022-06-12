import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';

import 'uno.css';

console.log('Hello world');

const app = createApp(App);

app.use(createPinia());

app.mount('#app');
