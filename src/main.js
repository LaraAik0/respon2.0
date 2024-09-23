import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import VueLazyload from 'vue-lazyload';

const app = createApp(App);

// Usando o VueLazyload com opções
app.use(VueLazyload, {
  loading: 'path/to/loading-image.png',
});

app.use(router);
app.mount('#app');