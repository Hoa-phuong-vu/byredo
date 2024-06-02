<template>
    <div class="login">
        <h1>LOGIN</h1>
        <div class="input">
            <input v-model="input.username" type="email" name="email" id="email" placeholder="Username" required>
            <input v-model="input.password" type="password" name="password" id="password" placeholder="Password" required>
            <button class="btn btn-success" @click="login">LOGIN</button>
            <router-link to="/signup"><h3>CREATE ACCOUNT</h3></router-link>
        </div>
        <div v-if="msg" class="alert alert-danger mt-3">{{ msg }}</div>
    </div>
</template>

<script>
export default {
    name: 'LogIn',
    data() {
        return {
            msg: '',
            input: {
                username: '',
                password: ''
            }
        };
    },
    methods: {
        login() {
            const { username, password } = this.input;
            if (username === 'admin' && password === 'testing') {
                this.$router.replace({ name: 'favourites' });
                localStorage.setItem('isLoggedIn', true); // Set user as logged in
            } else {
                this.msg = 'Invalid username or password';
            }
        },
        reset() {
            this.msg = '';
        }
    }
};
</script>

<style>
.login {
    width: 90vw;
    background-color: white;
    height: auto;
    margin: 2em auto;
    border-radius: 5px;
    text-align: center;
  }

  .input {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 1em;
    gap: 1.2em;
}

input {
    border: none;
    font-size: 1.3em;
    padding: 0.5em;
}

@media screen and (min-width: 900px) {
    .login {
    width: 50vw;
    background-color: white;
    height: auto;
    margin: 2em auto;
    border-radius: 5px;
    text-align: center;
  }

  .input {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 1em;
    gap: 1.2em;
}

input {
    border: none;
    font-size: 1.3em;
    padding: 0.5em;
}
}
</style>
