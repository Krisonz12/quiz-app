import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import 'materialize-css'
import 'material-design-icons/iconfont/material-icons.css'
import firebase from 'firebase' 



Vue.config.productionTip = false

var firebaseConfig = {
  apiKey: "AIzaSyB1-LQRh99iJ3TYD6UiqO-4QxEPuL3Rj4M",
  authDomain: "vuejs-quiz-app.firebaseapp.com",
  databaseURL: "https://vuejs-quiz-app.firebaseio.com",
  projectId: "vuejs-quiz-app",
  storageBucket: "vuejs-quiz-app.appspot.com",
  messagingSenderId: "932622837312",
  appId: "1:932622837312:web:a654acdf6dd22920b821a5"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig); 

// add these before Vue is instantiated
window.onload = require('axios')

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
