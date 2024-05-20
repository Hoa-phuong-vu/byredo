<template>
  <h1>Shopping Cart</h1>
  <CartList :cartItems="cartItems"/>
  <div v-if="cartItems.length > 0">
  <button class="checkout-button">Proceed to Checkout</button> 
  </div>
  <div v-if="cartItems.length === 0">
    Your Cart is Empty
  </div>
</template>

<script>
import CartList from '@/components/CartList.vue';
import axios from 'axios';


export default {
    name: "CartView",
    components: {
      CartList
    },
    data() {
      return {
        cartItems: [],
      }
    },
    async created() {
    const response = await axios.get(`/api/users/103837395/cart`);
    const cartItems = response.data;
    this.cartItems = cartItems;
  }
}
</script>