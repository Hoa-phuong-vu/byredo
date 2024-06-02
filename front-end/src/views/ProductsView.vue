<template>
  <div>
      <div class="search">
        <input type="text" v-model="searchQuery" placeholder="Search products..." class="searchbox">
      </div>
    <h1>ALL PRODUCTS</h1>
    <div class="filter">
      <h3 class="h3">Filter</h3>
      <div class="custom-select-container">
        <select v-model="filter" class="custom-select">
          <option value="All">All</option>
          <option value="Perfume">Perfume</option>
          <option value="Discovery Set">Discovery Set</option>
        </select>
        <i class="dropdown-icon">
          <img src="@/assets/dropdown.png" alt="dropdown" class="dropdown"/>
        </i>
      </div>
    </div>
    <div class="sort">
      <h3 class="h3">Sort</h3>
      <div class="custom-select-container right-align">
        <select v-model="sortOrder" class="custom-select">
          <option value="Ascending">Ascending</option>
          <option value="Descending">Descending</option>
        </select>
        <i class="dropdown-icon">
          <img src="@/assets/dropdown.png" alt="dropdown" class="dropdown">
        </i> 
      </div>
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
      sortOrder: 'Ascending',
      filteredProducts: [],
      searchQuery: '', 
    }
  },
  async created() {
    const response = await axios.get('/api/products');
    this.products = response.data;
    // Initially, display all products
    this.filteredProducts = this.products;
  },
  methods: {
    filterProducts() {
      if (this.filter === 'All') {
        this.filteredProducts = this.products;
      } else {
        this.filteredProducts = this.products.filter(product => product.cat === this.filter);
      }
    },
    sortProducts() {
      if (this.sortOrder === 'Ascending') {
        this.filteredProducts.sort((a, b) => (a.price > b.price) ? 1 : -1);
      } else if (this.sortOrder === 'Descending') {
        this.filteredProducts.sort((a, b) => (a.price < b.price) ? 1 : -1);
      }
    },
    searchProducts() {
      if (this.searchQuery.trim() === '') {
        // If search query is empty, show all products
        this.filteredProducts = this.products;
      } else {
        // Filter products based on search query
        this.filteredProducts = this.products.filter(product =>
          product.name.toLowerCase().includes(this.searchQuery.toLowerCase())
        );
      }
    }
  },
  watch: {
    filter: 'filterProducts',
    sortOrder: 'sortProducts',
    searchQuery: 'searchProducts'
  }
}
</script>

<style>
.search {
  display: flex;
  justify-content: center;
  margin-top: 0.5em;
}

.searchbox {
  width: 80vw; /* Make the search input span 90% of viewport width */
  padding: 0.5em; /* Add padding to the input */
}



.filter,
.sort {
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #ddd;
  border-top: #ddd 1px solid;
  padding: 1em;
  max-width: 40vw;

}

.custom-select-container {
  position: relative;
  width: 30vw; /* Set width to 80% of viewport width */
  
}

.custom-select {
  appearance: none;
  background-color: transparent;
  border: transparent;
  padding: 0.5em;
  width: 100%;
  border-radius: 4px;
}
.dropdown {
  width: 1em;
}
.dropdown-icon {
  position: absolute;
  top: 50%;
  right: 0.5em;
  transform: translateY(-50%);
  pointer-events: none; 
  color: #888; 
}

.p:hover {
  text-decoration: underline;
}


</style>
