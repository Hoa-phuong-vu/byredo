<template>
  <div v-if="product">
    <div class="container">
    <div class="img-wrap">
      <img :src="product.imageUrl" :alt="product.name"/>
    </div>
    <div class="product-details">
      <div class="info">
          <h2> {{product.name}}</h2>
          <h2 class="price"> {{product.price}}</h2>
      </div>
      <img src="@/assets/heart.svg" alt="heart" class="github">
      <p>{{ product.notes }}</p>
      <button @click="addToCart" class="add-to-cart" v-if="!itemIsInCart">
        Add to cart
      </button>
      <button class="grey-button" v-else>
        Item is already in cart
      </button>
      <!-- <button class="sign-in" @click="SignIn">Sign in to add to cart</button> -->
    </div>
  </div>
  </div>
  <div v-else>
    <PageNotFound />
  </div>
   
  </template>

<script>
import axios from 'axios';
import PageNotFound from './PageNotFound.vue';
// import {getAuth,  sendSignInLinkToEmail,isSignInWithEmailLink,signInWithEmailLink} from 'firebase/auth';


export default {
    name: "DetailsView",
    data() {
      return {
        product: {},
        cartItems: [],
      };
    },
    computed: {
    itemIsInCart() {
      return this.cartItems.some(
        (item) => item.id === this.$route.params.productId
      );
    },
  },
    methods: {
      async addToCart() {
        await axios.post('/api/users/103837395/cart', {id: this.$route.params.productId});
        alert('successfully added item to cart!');

        const cartResponse = await axios.get("/api/users/103837395/cart");
        this.cartItems = cartResponse.data;
      },
      
      // async SignIn() {
      //   const email = prompt('please enter email to sign in');
      //   const auth = getAuth();
      //   const actionCodeSetting = {
      //     url: 'http://localhost/products/${this.$route.params.productId}',
      //     handleCodeInApp: true,
      //   }
      //   await sendSignInLinkToEmail(auth, email, actionCodeSetting);
      //   alert('check your email');
      //   window.localStorage.setItem('emailForSignIn', email);
      // }
    },
    components: {
      PageNotFound
    },
    async created() {
    // const auth = getAuth();
    // if(isSignInWithEmailLink(auth, window.location.href)) {
    //   const email = window.localStorage.getItem('emailForSignIn');
    //   await signInWithEmailLink(auth, email, window.location.href);
    //   alert('successful');
    //   window.localStorage.removeItem('emailForSignIn');
    // }

    const response = await axios.get(`/api/products/${this.$route.params.productId}`);
    const product = response.data;
    this.product = product;

    const cartResponse = await axios.get("/api/users/103837395/cart");
    const cartItems = cartResponse.data;
    this.cartItems = cartItems;
    }
}
</script>