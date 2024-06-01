import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import ProductsView from '../views/ProductsView.vue';
import CartView from '../views/CartView.vue';
import DetailsView from '../views/DetailsView.vue';
import NotFoundPage from '../views/PageNotFound.vue';
import Login from '../views/LogIn.vue'; 
import SignUp from '../views/SignUp.vue';
import FavView from '../views/FavView.vue';
import Purchase from '../views/PurchaseView.vue';
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
    name: 'login',
    component: Login
  },
  {
    path: '/signup',
    component: SignUp
  },
  {
    path: '/fav',
    name: 'favourites',
    component: FavView
  },
  {
    path: '/purchase',
    component: Purchase
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  
})

export default router
