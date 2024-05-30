<template>
  <div>
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
    }
  },
  watch: {
    filter: 'filterProducts',
    sortOrder: 'sortProducts'
  }
}
</script>

<style>
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

/* .h3 {
  border-bottom: 1px solid #ddd;
  border-top: #ddd 1px solid;
  padding: 1em;
} */
</style>
