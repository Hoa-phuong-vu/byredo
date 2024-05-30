<template>
    <div 
      class="product-container"
      v-for="product in favItems"
      :key="product.id">
      <img class="product-image" :src="product.imageUrl" :alt="product.name"/>
      <div class="details-wrap">
        <h3>{{product.name}}</h3>
        <p>{{product.price}}</p>
      </div>
      <p @click="$emit('remove-from-fav', product.id)" class="remove-button">Remove</p>
    </div> 
  </template>
  
  <script>
  export default {
      name: 'FavProducts', 
      props: ['favItems'],
  }
  </script>