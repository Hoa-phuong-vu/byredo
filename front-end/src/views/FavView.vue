<template>
    <h1>Favourites</h1>
    <div v-if="favItems.length > 0">
      <FavProducts @remove-from-fav="removeFromFav($event)" :favItems="favItems" />
    </div>
    <div v-if="favItems.length === 0">
      You currently have no items in your Favourites!
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  import FavProducts from '@/components/FavProducts.vue';
  
  export default {
    name: "FavouritesPage",
    components: {
        FavProducts,
    },
    data() {
      return {
        favItems: [],
      }
    },
    methods: {
      async removeFromFav(productId) {
        const response = await axios.delete(`/api/users/103837395/fav/${productId}`);
        const updatedCart = response.data;
        this.favItems = updatedCart;
      },
    },
    async created() {
      const response = await axios.get('/api/users/103837395/fav');
      const favItems = response.data;
      this.favItems = favItems;
    }
  }
  </script>