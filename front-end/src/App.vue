<template>
  <NavBar/>
  <div class="page-wrap">
      <router-view/>
  </div>
  <FooterSection/>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import FooterSection from '@/components/FooterSection.vue';

export default {
  name: 'HomeView',
  components: {
    NavBar,
    FooterSection
  }
}
</script>


