import { createApp } from 'vue';
import App from './app/App.vue';
import { createPinia } from 'pinia';
import Splide from '@splidejs/vue-splide';
const pinia = createPinia();
const app = createApp(App);

app.use(pinia);
app.use(Splide);
app.mount('#app');
