<template>
   <div class="header">
    <router-link to="/products">
      <button class="discover">Discover</button>
    </router-link>
</div>
   <div class="collections">
    <h1>Collections</h1>
  <ProductsList :products="paginatedProducts" :perPage="1" />
  <div class="pagination">
    <img src="@/assets/back.png" alt="previous" @click="prevPage" class="page" :class="{ page: true, disabled: currentPage === 1 }">
    <img src="@/assets/next.png" alt="next" @click="nextPage" class="page" :class="{ page: true, disabled: currentPage === totalPages }">
  </div>

  </div>
   <div class="mission">
      <h1 class="text">ELEGANT</h1>
    <div class="two">
      <img src="@/assets/two.jpg" alt="two" class="random">
      <div class="one">
        <h1 class="text">UNIQUE</h1>
        <p>Each Byredo product tells a story through its meticulously crafted scents.</p>
      </div>
    </div>
      <h1 class="text">LUXURIOUS</h1>
   </div>
</template>

<script>
import ProductsList from '@/components/ProductsList.vue';
import axios from 'axios';


export default {
  name: 'HomeView',
  components: {
    ProductsList
  },
  data() {
      return {
        products: [],
        currentPage: 1,
        itemsPerPage: 1 
      }
    },
    async created() {
      const response = await axios.get('/api/products');
      const products = response.data;
      this.products = products;
    },
    computed: {
      totalPages() {
      return Math.ceil(this.products.length / this.itemsPerPage);
    },
    paginatedProducts() {
      const start = (this.currentPage - 1) * this.itemsPerPage;
      const end = start + this.itemsPerPage;
      return this.products.slice(start, end);
    }
  },
  methods: {
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
      }
    },
    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    }
  }
}
</script>

<style>
.header {
  background-image: url('@/assets/BYREDO.jpg');
  height: 500px;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  padding: 1em;
}

.page {
  width: 4em;
  margin: 0.5em;
  cursor: pointer;
  opacity: 1; /* Fully visible */
  transition: opacity 0.3s;
}
.pagination {
  display: flex;
  justify-content: center;
}
.collections {
  padding: 0em 3em;
}

.page.disabled {
  opacity: 0.5; /* Greyed-out */
  cursor: not-allowed;
}

.mission {
  background-color: #e0e0e088;
  padding:1em 4em;
}
.one {
  display: flex;
  flex-direction: column;
  gap: 3em;
  width: 15em;
}

.two {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding:1.5em 7em;
}
.random {
  width: 20em;
}

.text {
  font-size: 5rem;
  font-weight: 200;
  padding: 0;
}
</style>

