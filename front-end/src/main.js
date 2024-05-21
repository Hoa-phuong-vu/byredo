import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './main.css';


// import { initializeApp } from "firebase/app";

// const firebaseConfig = {
//   apiKey: "AIzaSyDFOwR4Qo2VBmaqETxnKK4g8vlp9r3N8bo",
//   authDomain: "byredo-1599d.firebaseapp.com",
//   projectId: "byredo-1599d",
//   storageBucket: "byredo-1599d.appspot.com",
//   messagingSenderId: "834180545775",
//   appId: "1:834180545775:web:d7dc6278b97e69b679ef1a"
// };

// initializeApp(firebaseConfig);


createApp(App).use(router).mount('#app')
