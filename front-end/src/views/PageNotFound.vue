<template>
   <div class="notFound">
    <h1>404</h1>
    <p>PAGE NOT FOUND</p>
    <router-link to="/products">
      <button>CONTINUE SHOPPING</button>
    </router-link>
   </div>
</template>

<script>
export default {
    name: "NotFoundPage", 
    
}
</script>

<style>
.notFound {
  text-align: center;
  padding: 10em;
  
}

.notFound p {
  font-size: 5em;
  font-weight: 500;
  padding-top: 0.5em;
  padding-bottom: 0.5em;
}

.notFound button {
  padding: 5px;
  border-radius: 4px;
}

.notFound button:hover {
  color: black;
  background-color: white;
  transition: background-color 0.7s, color 0.7s;
}

</style>