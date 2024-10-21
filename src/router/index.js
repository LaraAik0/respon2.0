
import { createRouter, createWebHistory } from 'vue-router';

// Importação dos componentes com Lazy Loading
const HelloWorld = () => import('@/components/HelloWorld.vue');
const imagemDiversos = () => import('@/components/imagemDiversos.vue');
const tabelaUnica = () => import('@/components/tabelaUnica.vue');
const PaginaPrincipal = () => import('@/components/PaginaPrincipal.vue');
const videoUnico = () => import('@/components/videoUnico.vue');

const routes = [
  { path: '/', component: PaginaPrincipal },  // Rota para a página principal
  { path: '/hello', component: HelloWorld },
  { path: '/imagens', component: imagemDiversos },
  { path: '/tabela', component: tabelaUnica },
  { path: '/video', component: videoUnico },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;