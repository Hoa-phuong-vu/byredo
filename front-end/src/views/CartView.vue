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
import {cartItems} from '../temp-data';

export default {
    name: "CartView",
    components: {
      CartList
    },
    data() {
      return {
        cartItems,
      }
    }
}
</script>