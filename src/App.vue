<template>
  <Navigation />
</template>

<script>
import Navigation from "@/components/NavBar";

export default {
  name: 'HomeView',
  components: {Navigation}
}
</script>

<style>
  html {
	font-size: 62.5%;
  }
  body {
    margin: 0;
    background-color: #F5F4F2;
    color: black;
  
    font-size: 1.6rem;
  }
  #app {
    font-family: 'Boska', serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
</style>
