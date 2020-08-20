<template>
  <div class="login container">
    <div class="login-form">
	  <h2 class="center-align indigo-text">Login</h2>
      <form @submit.prevent="loginUser">
        <div class="field title">
            <input type="email" placeholder="Enter your email" v-model="email">
        </div>
        <div class="field add-ingredient">
          <input type="password" name="add-ingredient" placeholder="Enter your password" v-model="password">
        </div>
          <div class="field center-align">
              <button class="btn pink">Login</button>
          </div>
		  <p class="sign">
			<span>Need an account?</span>
		    <router-link
		    to="/register" 
			  class="register pink-text">Register</router-link></p>
      </form>
	</div>
  </div>
</template>

<script>
import firebase from 'firebase'

export default {
  name: 'Login', 
  data() {
	return {
	  email: '',
	  password: ''
	}
  },
  methods: {
	  loginUser() {
	  // log the user in 
	  firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(
      this.$router.push('/')
    )
	  }
  },
}
</script>

<style>
.login {
    margin-top: 60px;
    padding: 20px;
    max-width: 500px;
  }

  .login h2 {
    font-size: 2em;
    margin: 20px auto;
  }

  .login .field {
    margin: 20px auto;
    position: relative;
  }

  .login .sign  span{
	color: #000;
	cursor: none;
  }

  .login .sign .register {
	cursor: pointer;
	color: black;
  }

  .login .sign .register:hover {
	text-decoration: none;
  }
  
@import '~materialize-css/dist/css/materialize.css';
</style>