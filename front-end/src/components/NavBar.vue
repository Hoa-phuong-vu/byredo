<template>
  <div>
    <div class="nav-bar">
      <div class="logo-wrap">
        <router-link to="/"><img src="../assets/logo.svg" alt="logo"></router-link>
      </div>
      <div class="links">
        <router-link to="/">Home</router-link>
        <router-link to="/products">Products</router-link>
        
        <router-link to="/login"><img src="@/assets/login.svg" alt="login" class="cartImg-login"></router-link>
        <router-link to="/cart"><img src="@/assets/cart.svg" alt="logo" class="cartImg"></router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavBar",
}
</script>

<style>
.nav-bar {
    position: fixed;
    background-color: white;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 16px;
    z-index: 1000;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  .logo-wrap {
    width: 125px;
  }
  
  .links {
    display: flex;
    gap: 1.5em; /* space between links */
    align-items: center;
  }
  
  .links a {
    color: black;
    text-decoration: none;
  }
</style>
