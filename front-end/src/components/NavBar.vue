<template>
  <div class="logo-wrap">
    <router-link to="/"><img src="../assets/logo.svg" alt="logo"></router-link>
  </div>
  <div class="links">
    <router-link to="/">Home</router-link> |
    <router-link to="/products">Products</router-link> |
    <router-link to="/cart"><img src="@/assets/cart.svg" alt="logo" class="cartImg"></router-link>
  </div>
  <div class="page-wrap">
    <router-view/>
  </div>

</template>
  
<script>
export default {
  name: "NavBar",
}
</script>