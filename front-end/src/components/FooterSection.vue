<template>
    <div>
        <div class="footnav">
            <h3>Navigate</h3>
            <router-link to="/">Home</router-link>
            <router-link to="/products">Products</router-link>
            <router-link to="/LogIn">Login</router-link>
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