<template>
  <div 
    class="product-container"
    v-for="product in cartItems"
    :key="product.id">
    <img class="product-image" :src="product.imageUrl" :alt="product.name"/>
    <div class="details-wrap">
      <h3>{{product.name}}</h3>
      <p>{{product.price}}</p>
    </div>
    <p @click="$emit('remove-from-cart', product.id)" class="remove-button">Remove</p>
  </div> 
  <div class="total">
      <h2>Total: ${{ cartTotal }}</h2>
  </div>
</template>

<script>
export default {
    name: 'CartList', 
    props: ['cartItems'],
    computed: {
    cartTotal() {
      return this.cartItems.reduce((total, product) => {
        // Remove the dollar sign and any leading/trailing whitespace
        const priceString = product.price.replace('$', '').trim();
        const price = parseFloat(priceString);

        return total + (isNaN(price) ? 0 : price);
      }, 0);
    }
    }
}
</script>