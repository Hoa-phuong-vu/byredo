<template>
  <h1>Shopping Cart</h1>
  <div class="cart-container">
    <div v-if="cartItems.length > 0">
      <CartList @remove-from-cart="removeFromCart($event)" :cartItems="cartItems" />
      <button class="checkout-button">Checkout</button>
    </div>
    <div v-if="cartItems.length === 0">
      You current have no items in your cart!
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import CartList from '@/components/CartList.vue';

export default {
  name: "ShoppingCartPage",
  components: {
    CartList,
  },
  data() {
    return {
      cartItems: [],
    }
  },
  methods: {
    async removeFromCart(productId) {
      const response = await axios.delete(`/api/users/103837395/cart/${productId}`);
      const updatedCart = response.data;
      this.cartItems = updatedCart;
    },
  },
  async created() {
    const response = await axios.get('/api/users/103837395/cart');
    const cartItems = response.data;
    this.cartItems = cartItems;
  }
}
</script>