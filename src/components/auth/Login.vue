<template>
  <div class="login container">
    <form @submit.prevent="login" class="card-panel"> 
      <h2 class="center deep-purple-text">Login</h2>
      <div class="field">
        <input type="email" name="email" class="input-fields" placeholder="Enter your email" v-model="email">
      </div>
      <div class="field"> 
        <input type="password" name="password" class="input-fields" placeholder="Enter your password" v-model="password">
      </div>
      <p v-if="feedback" class="red-text center" >{{ feedback }}</p>  
      <div class="field center-align">
        <button class="btn pink">Login</button>
      </div>
    </form> 
  </div>
</template>



<script>
import firebase from 'firebase'

export default {
  name: 'Login',
  data(){
    return {
      email: null,
      password: null,
      feedback: null
    }
  },
  methods: {
    login(){
      if(this.email && this.password){
        firebase.auth().signInWithEmailAndPassword(this.email, this.password)
        .then(user => {
          this.$router.push({ name: 'Home' })
        }).catch(err => {
          this.feedback = err.message
        })
        this.feedback = null 
      } else {
        this.feedback = 'Please fill in both fields'
      }
    }
  }
}
</script>


<style>
.login{
  max-width: 400px;
  margin-top: 60px;
}
.login h2{
  font-size: 2.4em;
}
.login .field{
  margin-bottom: 16px;
}
</style>