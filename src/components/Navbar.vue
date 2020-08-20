<template>
  <div class="navbar">
    <nav>
    <div class="nav-wrapper">
      <a href="#" class="brand-logo">Quiz App</a>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
       <li><router-link v-if="handleAuthState()" to="/login"><i class="material-icons left">supervisor_account</i>{{ text }}</router-link></li>      </ul>
    </div>
  </nav>
  </div>
</template>

<script>
  import firebase from 'firebase'

  export default {
    data() {
      text: null
    },
    methods: {
      handleAuthState() {
        firebase.auth().onAuthStateChanged(user => {
          if (user) {
            this.text = 'Login'
          } else {
            this.text = 'LogOut'
          }

});
      }
    },
  }
</script>

<style scoped>
  .navbar nav {
    padding: 0 20px;
  }

  .material-icons {
    float: left;
  }
</style>