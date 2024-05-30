<template>
    <div class="login">
        <h1>CREATE ACCOUNT</h1>
        <div class="input">
            <input type="FName" placeholder="First name" required>
            <input type="LName" placeholder="Last name" required>
            <input type="email" name="email" id="email" placeholder="Email" required>
            <input type="password" name="password" id="password" placeholder="Password" required>
            <button>CREATE ACCOUNT</button>
        </div>
        
    </div>
</template>

<script>
export default {
    name: 'SignUp',
}
</script>