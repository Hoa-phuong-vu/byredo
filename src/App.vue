<template>
  <div class="logo-wrap">
    <router-link to="/"><img src="./assets/logo.svg" alt="logo"></router-link>
  </div>

  <div class="page-wrap">
    <router-view/>
  </div>
  
</template>

<script>

export default {
  name: 'HomeView',
  components: {}
}
</script>


