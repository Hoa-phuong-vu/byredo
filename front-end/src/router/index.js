import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import ProductsView from '../views/ProductsView.vue';
import CartView from '../views/CartView.vue';
import DetailsView from '../views/DetailsView.vue';
import NotFoundPage from '../views/PageNotFound.vue';
const routes = [
  {
    path: '/',
    component: HomeView
  },
  {
    path: '/products',
    component: ProductsView
  },
  {
    path: '/cart',
    component: CartView
  },
  {
    path: '/products/:productId',
    component: DetailsView
  }, {
    path: '/:pathMatch(.*)*',
    component: NotFoundPage
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  
})

export default router