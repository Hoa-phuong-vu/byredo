<template>
    <nav>
      <div class="logo-container">
        <router-link to="/"><img src="../assets/logo.svg" alt="logo"></router-link>
      </div>
        <div class="links">
          <router-link to="/">Home</router-link> |
          <router-link to="/about">Products</router-link> |
          <router-link to="/contact">Contact</router-link>
        </div>
      
    </nav>
    <router-view/>
  </template>
  
  <style>

  
  nav {
    padding: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center; /* Vertically align the logo and links */
    background-color: white;
  }
  
  .logo-container {
    display: flex; /* Ensure the logo container uses flex layout */
  }
  
  
  .links {
    display: flex;
    justify-content: space-between;
  }
  
  nav a {
    font-weight: bold;
    color: black;
  }
  
  nav a.router-link-exact-active {
    color: #bebebe;
  }
  
  img {
    width: 125px;
    padding: 10px;
  }
  </style>
  