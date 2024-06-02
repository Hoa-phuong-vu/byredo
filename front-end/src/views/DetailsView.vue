<template>
  <div v-if="product">
    <div class="container">
      <div class="img-wrap">
        <img :src="product.imageUrl" :alt="product.name"/>
      </div>
      <div class="product-details">
        <div class="info">
          <h2>{{ product.name }}</h2>
          <h2 class="price">{{ product.price }}</h2>
        </div>
        <img src="@/assets/heart.svg" alt="heart" class="github" @click="addToFavorites" v-if="!itemIsInFavorites"> 
        <img src="@/assets/heart-filled.svg" alt="heart" class="github" v-else>
        <p>{{ product.notes }}</p>
        <button @click="addToCart" class="add-to-cart" v-if="!itemIsInCart">
          Add to cart
        </button>
        <button class="grey-button" v-else>
          Item is already in cart
        </button>
      </div>
    </div>
  </div>
  <div v-else>
    <PageNotFound />
  </div>
</template>

<script>
import axios from 'axios';
import PageNotFound from './PageNotFound.vue';

export default {
  name: "DetailsView",
  data() {
    return {
      product: {},
      cartItems: [],
      favItems: [],
      isLoggedIn: false
    };
  },
  computed: {
    itemIsInCart() {
      return this.cartItems.some(
        (item) => item.id === this.$route.params.productId
      );
    },
    itemIsInFavorites() {
      return this.favItems.some(
        (item) => item.id === this.$route.params.productId
      );
    }
  },
  methods: {
    async addToCart() {
      await axios.post('/api/users/103837395/cart', { id: this.$route.params.productId });
      
      const cartResponse = await axios.get("/api/users/103837395/cart");
      this.cartItems = cartResponse.data;
    },
    async addToFavorites() {
      if (!this.isLoggedIn) {
        // Prompt user to log in if not logged in
        alert('Please log in to add items to favorites.');
        return;
      }
      if (!this.itemIsInFavorites) {
        await axios.post('/api/users/103837395/fav', { id: this.$route.params.productId });
        const newFavItem = await axios.get(`/api/products/${this.$route.params.productId}`);
        this.favItems.push(newFavItem.data);
      }
    }
  },
  components: {
    PageNotFound
  },
  async created() {
    this.isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    
    const response = await axios.get(`/api/products/${this.$route.params.productId}`);
    this.product = response.data;

    const cartResponse = await axios.get("/api/users/103837395/cart");
    this.cartItems = cartResponse.data;

    const favResponse = await axios.get("/api/users/103837395/fav");
    this.favItems = favResponse.data;
  }
};
</script>


<style>

.container {
    display: flex;
    flex-direction: column;
}

.product-details {
    display: flex;
    flex-direction: column;
    padding: 2em;
    width: 29.7em;
    background-color: white;
    height: fit-content;
    margin-top: 32px;
    border-radius: 5px;
    justify-content: center;
    align-self: center;
  }

@media screen and (min-width: 900px) {

  .container {
    flex-direction: row;
    justify-content: space-evenly;
  }

  .product-details {
    display: flex;
    flex-direction: column;
    padding: 2em;
    width: 29.7em;
    background-color: white;
    height: fit-content;
    margin-top: 32px;
    border-radius: 5px;
    gap: 1em;
  }
}

</style>