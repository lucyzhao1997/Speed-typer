
import Content from '../components/Content.vue';
import GameOver from '../components/GameOver.vue';
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    { path: '/', name: 'Game', component: Content },
    { path: '/game-over', name: 'game-over', component: GameOver },
];
const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
  });
  
export default router;