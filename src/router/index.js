import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import ProductsView from '../views/ProductsView.vue';
import ClothingsView from '../components/ClothingsView.vue';
import AccessoriesView from '../components/AccessoriesView.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/products',
    name: 'Products',
    component: ProductsView,
    children: [
      {
        path: 'clothings',
        component: ClothingsView
      },
      {
        path: 'accessories',
        component: AccessoriesView
      }
    ]
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
