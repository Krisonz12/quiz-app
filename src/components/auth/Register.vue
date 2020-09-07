<template>
  <div class="container register">
    <form @submit.prevent="registerUser" class="card-panel">
      <h2 class="center deep-purple-text">Register</h2>
      <div class="field">
        <input type="email" name="email" placeholder="Enter your email" v-model="email">
      </div>
      <div class="field">
        <input type="password" name="password" placeholder="Enter your password" v-model="password">
      </div>
      <p class="red-text center" v-if="feedback">{{feedback}}</p>
      <div class="field center">
        <button class="btn center-align pink">
          Register
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import firebase from 'firebase'

export default {
  name: 'Register',
  data(){
    return {
      email: null,
      password: null,
      feedback: null,
    }
  },
  methods: {
    registerUser(){
      if(this.email && this.password){
        firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then( user => {                        
          this.$router.push({ name: "Home" })
        })
        .catch(err => {
          this.feedback = err.message
        })
      }    
    }
  }
}   
</script>

<style>
  .register{
    max-width: 400px;
    margin-top: 60px;
  }
  .register h2{
    font-size: 2.4em;
  }
  .register .field{
    margin-bottom: 16px;
  }

@import '~materialize-css/dist/css/materialize.css';
</style>