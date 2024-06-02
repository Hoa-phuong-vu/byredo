<template>
  <div>
    <div class="nav-bar">
      <div class="logo-wrap">
        <router-link to="/"><img src="../assets/logo.svg" alt="logo"></router-link>
      </div>
      <!-- Dropdown Menu for smaller screens -->
      <div class="dropdown">
        <button class="dropbtn" @click="toggleDropdown">&#9776;</button>
        <div class="dropdown-content" :class="{ show: showDropdown }">
          <button class="closebtn" @click="toggleDropdown">&times;</button>
          <router-link to="/" @click="closeDropdown">Home</router-link>
          <router-link to="/products" @click="closeDropdown">Products</router-link>
          <router-link to="/fav" @click="closeDropdown">Favourites</router-link>
          <router-link to="/login" @click="closeDropdown">Login</router-link>
          <router-link to="/cart" @click="closeDropdown">Cart</router-link>
        </div>
      </div>
      <!-- Regular Links for larger screens -->
      <div class="links">
        <router-link to="/">Home</router-link>
        <router-link to="/products">Products</router-link>
        <router-link to="/fav">Favourites</router-link>
        <router-link to="/login"><img src="@/assets/login.svg" alt="login" class="cartImg-login"></router-link>
        <router-link to="/cart"><img src="@/assets/cart.svg" alt="logo" class="cartImg"></router-link>
      </div>
    </div>
  </div>
</template>



<script>
export default {
  name: "NavBar",
  data() {
    return {
      showDropdown: false,
    };
  },
  methods: {
    toggleDropdown() {
      this.showDropdown = !this.showDropdown;
    },
    closeDropdown() {
      this.showDropdown = false;
    }
  }
};
</script>


<style scoped>
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
  display: none; /* Hide links by default */
  gap: 1.5em;
  align-items: center;
}

.links a {
  color: black;
  text-decoration: none;
}

.dropdown {
  display: flex; /* Show dropdown button by default */
  flex-direction: column;
  align-items: flex-start;
  margin-right: 3em;
}

.dropbtn {
  background-color: transparent;
  color: black;
  border: none;
  font-size: 2em;
  cursor: pointer;
  position: relative;
  left: 1.2em;
  padding: 0;
}

.dropdown-content {
  display: none;
  flex-direction: column;
  position: absolute;
  background-color: white;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  width: 100%;
  padding: 10px;
  right: 0;
  top: 0;
  height: 100vh;
}

.dropdown-content.show {
  display: flex; /* Show dropdown content when showDropdown is true */
}

.dropdown-content a {
  padding: 10px;
  text-decoration: none;
  display: block;
  color: black;
}

.dropdown-content a:hover {
  background-color: #f1f1f1;
}

.closebtn {
  align-self: flex-end;
  color: black;
  background: none;
  border: none;
  font-weight: 200;
  font-size: 3em;
  cursor: pointer;
  margin: 0;
  padding: 0;
  display: block;
}
@media (min-width: 800px) {
  .dropdown-content {
    height: auto;
  }
}

@media (min-width: 1200px) {
  .dropdown {
    display: none; /* Hide dropdown button on larger screens */
  }

  .dropdown-content {
    height: auto;
  }
  
  .links {
    display: flex; /* Show links on larger screens */
  }
}
</style>
