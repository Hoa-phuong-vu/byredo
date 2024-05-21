<template>
    <div>
        <div class="footnav">
            <h3>Navigate</h3>
            <router-link to="/">Home</router-link>
            <router-link to="/products">Products</router-link>
            <router-link to="/login">Login</router-link>
            <router-link to="/about">About</router-link>
        </div>
        
        <div class="footer">
            <p>©Phuong Hoa Vu</p>
            <a href="https://github.com/Hoa-phuong-vu">
                <img src="@/assets/github.png" alt="github" class="github">
            </a>
            
        </div>
    </div>
</template>

<script>
export default {
    name: 'FooterSection',
}

</script>

<style>
/*footer*/
.footer {
  display: flex;
  justify-content: space-between;
  border-top: #888 solid 1px;
  padding: 0.5em;
}

.footnav {
  padding: 1em;
  display: flex;
  flex-direction: column;
}

.footnav a {
  text-decoration: none;
  color: black;
}

.github {
  width: 1.7em;
}
</style>