<template>
  <nav>
    <router-link to="/"><img src="./assets/logo.svg"></router-link>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">Products</router-link>
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
  text-align: center;
}

nav {
  padding: 10px;
}

nav a {
  font-weight: bold;
  color: black;
}

nav a.router-link-exact-active {
  color: #EBE9E6;
}

nav img {
  width: 125px;
  display: block;
}
</style>
