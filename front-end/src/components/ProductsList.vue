<template>
   
    <div class="grid-wrap">
        <div 
        class="product-item"
        v-for="product in products"
        :key="product.id">
            <img :src="product.imageUrl" :alt="product.name"/>
            <h3 class="product-name">{{ product.name}}</h3>
            <p class="product-price"> {{ product.price}}</p>
<<<<<<< Updated upstream
            <router-link :to="'/products/' + product.id">
            <button>View Details</button>
            </router-link>
=======
        
            </div>
        </router-link>
>>>>>>> Stashed changes
        </div>
    </div>
</template>

<script>
// import axios from 'axios';

export default {
    name: 'ProductsList',
    props: ['products'],
   
}
</script>