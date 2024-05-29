<template>
  <div>
    <h1>ALL PRODUCTS</h1>
    <h3 class="h3">Filter</h3>
    <div class="filter">
      <p @click="filterProducts('All')">All</p>
      <p @click="filterProducts('Perfume')">Perfume</p>
      <p @click="filterProducts('Discovery Set')">Discovery Set</p>
    </div>
    <h1>Sort</h1>
    <div class="sort">
      <p @click="sortProducts('Ascending')">Ascending</p>
      <p @click="sortProducts('Descending')">Descending</p>
    </div>
    <ProductsList :products="filteredProducts"/>
  </div>
</template>

<script>
import ProductsList from '@/components/ProductsList.vue';
import axios from 'axios';

export default {
  name: "ProductsView",
  components: {
    ProductsList,
  },
  data() {
    return {
      products: [],
      filter: 'All',
      filteredProducts: [],
    }
  },
  async created() {
    const response = await axios.get('/api/products');
    this.products = response.data;
    // Initially, display all products
    this.filteredProducts = this.products;
  },
  methods: {
    filterProducts(category) {
      if (category === 'All') {
        this.filteredProducts = this.products;
      } else {
        this.filteredProducts = this.products.filter(product => product.cat === category);
      }
    },
    sortProducts(order) {
      if (order === 'Ascending') {
        this.filteredProducts.sort((a, b) => (a.price > b.price) ? 1 : -1);
      } else if (order === 'Descending') {
        this.filteredProducts.sort((a, b) => (a.price < b.price) ? 1 : -1);
      }
    }
  },
}
</script>

<style>
.filter {
  cursor: pointer;
  padding: 1em;
}

.p:hover {
  text-decoration: underline;
}

.h3 {
  border-bottom: 1px solid #ddd;
  border-top: #ddd 1px solid;
  padding: 1em;
}
</style>