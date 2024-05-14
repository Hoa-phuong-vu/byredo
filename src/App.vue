<template>
  <router-link to="/"><img src="./assets/logo.svg"></router-link>
  
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">Products</router-link>
    <router-link to="/contact">Contacts</router-link>
  </nav>
  <router-view/>
</template>

<style>
body {
  background-color: #F5F4F2;
  color: black;
  font-family: 'Boska', serif;
}
#app {
  font-family: 'Boska', serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  
}

nav {
  padding: 10px;
  display: flex;
  flex-direction: column;
  text-align: right;
}

nav a {
  font-weight: bold;
  color: black;
}

nav a.router-link-exact-active {
  color: #bebebe;
}

img {
  width: 125px;
  display: block;
  padding: 10px;
}
</style>
