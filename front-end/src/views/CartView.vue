<template>
  <h1>Shopping Cart</h1>
  <div v-if="cartItems.length > 0">
    <CartList @remove-from-cart="removeFromCart($event)" :cartItems="cartItems" />
    <button class="checkout-button" @click="checkout">Proceed to Checkout</button>
  </div>
  <div v-if="cartItems.length === 0">
    You current have no items in your cart!
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
    async checkout() {

        await axios.delete(`/api/users/103837395/cart`);
        this.cartItems = [];
        // Navigate to the purchase page
        this.$router.push('/purchase');
    }
  },
  async created() {
    try {
      const response = await axios.get('/api/users/103837395/cart');
      const cartItems = response.data;
      this.cartItems = cartItems;
    } catch (error) {
      console.error('Error fetching cart items:', error);
      // Handle error
    }
  }
}
</script>


<style>

.checkout-button {
    width: 95vw;
    margin: 0.2em;
  }


@media screen and (min-width:900px){
  .checkout-button {
    width: 95vw;
    margin: 1em;
  }
}

</style>