<template>
  <h1>ALL PRODUCTS</h1>
    <ProductsList :products="products"/>
</template>

<script>
import ProductsList from '@/components/ProductsList.vue';
import {products} from '../temp-data';
export default {
    name: "ProductsView",
    components: {
      ProductsList
    },
    data() {
      return {
        products,
      }
    }
}
</script>