<template>
  <div class="register container">
      <h2 class="center-align indigo-text">Register</h2>
      <form @submit.prevent="registerUser">
        <div class="field title">
            <input type="email" placeholder="Enter your email" v-model="email">
        </div>
        <div class="field add-ingredient">
          <input type="password" name="add-ingredient" placeholder="Enter your password" v-model="password">
        </div>
          <div class="field center-align">
              <button class="btn pink" @click="registerUser">Register</button>
          </div>
		  <p class="sign">
			<span>Have an account?</span>
		    <router-link
		    to="/login" 
			class="login pink-text" >Login</router-link></p>
      </form>
  </div>
</template>

<script>
import firebase from 'firebase'

export default {
  name: 'Register', 
  data() {
	return {
	  email: '',
	  password: ''
	}
  },
  methods: {
	registerUser() {
	  // log the user in 
	  firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(
		user => {
		  this.$router.push('/')
		},
	  )
	}
  },
}
</script>

<style>
.register {
    margin-top: 60px;
    padding: 20px;
    max-width: 500px;
  }

  .register h2 {
    font-size: 2em;
    margin: 20px auto;
  }

  .register .field {
    margin: 20px auto;
    position: relative;
  }

  .register .sign  span{
	color: #000;
	cursor: none;
  }

  .register .sign .login {
	cursor: pointer;
	color: black;
  }

  .register .sign .login:hover {
	text-decoration: none;
  }
  
@import '~materialize-css/dist/css/materialize.css';
</style>