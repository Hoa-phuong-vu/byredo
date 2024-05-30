<template>
    <div class="login">
        <h1>LOGIN</h1>
        <div class="input">
            <input type="email" name="email" id="email" placeholder="Username" required>
            <input type="password" name="password" id="password" placeholder="Password" required>
            <button>SIGN IN</button>
            <router-link to="/signup"><h3>CREATE ACCOUNT</h3></router-link>
        </div>
        
    </div>
</template>

<script>
export default {
    name: 'LogIn'
}
</script>

<style>

</style>