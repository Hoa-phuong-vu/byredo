<template>
   <div class="header">
    <router-link to="/products">
      <button class="discover">Discover</button>
    </router-link>
</div>
   <div class="collections">

   </div>
   <div class="mission">
    <h1 class="slogan">Redefining Scents, Inspiring Journeys</h1>
   </div>
</template>

<script>



export default {
  name: 'HomeView',
  components: {}
}
</script>

<style>
.header {
  background-image: url('@/assets/BYREDO.jpg');
  height: 500px;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  padding: 1em;
}

.slogan {
  color: Black;
  
}

</style>

