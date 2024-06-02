<template>
    <div class="grid-wrap">
        <div 
        class="product-item"
        v-for="product in products"
        :key="product.id">
        <router-link :to="'/products/' + product.id">
            <img :src="product.imageUrl" :alt="product.name"/>
            <div class="product-info">
            <p class="product-name">{{ product.name}}</p>
            <p class="product-price"> {{ product.price}}</p>
            </div>
        </router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ProductsList',
    props: ['products'],
}
</script>
