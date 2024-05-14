<template>
  <div class="home">
   <div class="header">
      <button class="button">Discover</button>
   </div>
   <div class="collections">

   </div>
   <div class="mission">
    
   </div>
  </div>
</template>

<script>



export default {
  name: 'HomeView',
  components: {}
}
</script>

<style>
.home {
  font-family: 'Boska', serif;
}

.header {
  background-image: url('../assets/BYREDO.jpg');
  height: 500px;
}

.button {
  border-radius: 0.5em;
  font-size: 3rem;
  border: 0;
  color: #615c5ca4;
  background-color: white;
  font-weight: bold;
}

.button:hover {
  color: white;
  background-color: #bebebe;
  border: #bebebe
}
</style>