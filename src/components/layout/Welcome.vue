<template>
  <div class="quiz container">
     <div class="card-panel">
       <h2 class="center deep-purple-text">Quick Quiz</h2>
      <div class="center-align">
       <p class="red-text" v-if="feedback">{{ feedback }}</p>
        <a tag="a" class="waves-effect deep-purple btn" @click.prevent="play">play</a>
      </div>
     </div>
   </div>
</template>

<script>
  import firebase from 'firebase'

  export default {
    data() {
      return {
        feedback: null,
        user: null
      }
    },
    methods: {
      play() {
        firebase.auth().onAuthStateChanged(user => {
          if (user) {
            this.$router.push({ name: 'Quiz' })
          } else {
            this.feedback = 'Please Login to Play'
          }
        })
      }
    },
    created(){
      let user = firebase.auth().onAuthStateChanged((user => {
        if(user){
          this.user = user
        } else {
          this.user = null
        }
      }))
  }
  }
</script>

<style scoped>
  .quiz {
    max-width: 400px;
    margin-top: 150px;

  }

  .quiz h2 {
    font-size: 2.4em;
  }
</style>