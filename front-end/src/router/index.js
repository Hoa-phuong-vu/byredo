import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import ProductsView from '../views/ProductsView.vue';
import CartView from '../views/CartView.vue';
import DetailsView from '../views/DetailsView.vue';
import NotFoundPage from '../views/PageNotFound.vue';
import Login from '../views/LogIn.vue';
import AboutPage from '../views/AboutView.vue';
import SignUp from '../views/SignUp.vue';
import FavView from '../views/FavView.vue';
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
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/signup',
    component: SignUp
  },
  {
    path: '/about',
    component: AboutPage
  },
  {
    path: '/favourites',
    name: 'favourites',
    component: FavView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  
})

export default router
