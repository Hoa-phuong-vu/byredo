<template>
    <div>
      <h1>Favourites</h1>
      <div v-if="isLoggedIn && favItems.length > 0">
        <FavProducts @remove-from-fav="removeFromFav" :favItems="favItems" />
      </div>
      <div v-else-if="isLoggedIn && favItems.length === 0">
        You currently have no items in your Favourites!
      </div>
      <div v-else>
        Please <router-link to="/login">log in</router-link> to view your favourites.
      </div>
      <button v-if="isLoggedIn" @click="logout">Sign Out</button>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  import FavProducts from '@/components/FavProducts.vue';
  
  export default {
    name: 'FavouritesPage',
    components: {
      FavProducts,
    },
    data() {
      return {
        isLoggedIn: false,
        favItems: [],
      }
    },
    methods: {
      async removeFromFav(productId) {
        const response = await axios.delete(`/api/users/103837395/fav/${productId}`);
        const updatedCart = response.data;
        this.favItems = updatedCart;
      },
      async logout() {
        localStorage.removeItem('isLoggedIn'); // Remove user authentication status
        this.isLoggedIn = false;
        this.$router.push('/login');
      },
      async fetchFavourites() {
        const response = await axios.get('/api/users/103837395/fav');
        this.favItems = response.data;
      }
    },
    async created() {
      this.isLoggedIn = localStorage.getItem('isLoggedIn') === 'true'; // Check if user is logged in
      if (this.isLoggedIn) {
        await this.fetchFavourites();
      }
    }
  }
  </script>
  