<template>
  <div class="container-app">
    <div class="container-quiz">
      <div class="quiz-header">
        <h1>Quick Quiz</h1>
      </div>

      <div class="quiz-main" v-for="data in questions.slice(a, b)" :key="data.category">
        <div class="box-question">
          <p>{{ data.question }}</p>
        </div>
      </div>
      <div class="box-options">
        <ul>
          <li :class="select ? checkIncorrect(item) : ''" @click="selectResponse" :key="data.incorrect_answers[0]" v-for="data in questions.slice(a, b)">{{ data.incorrect_answers[0] }}</li>
          <li :class="select ? checkCorrect(item) : ''" @click="selectResponse" :key="data.correct_answer" v-for="data in questions.slice(a, b)">{{ data.correct_answer }}</li>
          <li :class="select ? checkIncorrect(item) : ''" @click="selectResponse" :key="data.incorrect_answers[1]" v-for="data in questions.slice(a, b)">{{ data.incorrect_answers[1] }}</li>
          <li :class="select ? checkIncorrect(item) : ''" @click="selectResponse" :key="data.incorrect_answers[2]" v-for="data in questions.slice(a, b)">{{ data.incorrect_answers[2] }}</li>
        </ul>
      </div>
      <div class="box-score" v-if="score_show">
        <h2>Your score is </h2>
        <h2>{{score}}/{{data.length}}</h2>
      </div>
      <div class="quiz-footer">
        <div class="box-button">
          <button @click="nextQuestion" :style="next ? 'background-color: rgb(106, 128, 202)' : ''">Next</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    data() {
      return {
        questions: '',
        a:0,
        b:1,
        select: false,
        score: 0,
        next: false,
        quiz: true,
        score_show: false
      }
    },
    methods: {
      selectResponse() {
        this.select = true
        this.next = true

        if (incorrect_answers) {
          this.score++
        }
      },

      checkIncorrect(incorrect_answers) {
        if (incorrect_answers) {
          return 'correct'
        } else {
          return 'incorrect'
        }
      },

      checkCorrect(incorrect_answers) {
        if (incorrect_answers) {
          return 'incorrect'
        } else {
          return 'correct'
        }
      },

      nextQuestion() {
        this.a++,
        this.b++,
        this.select = false;
      }
    },
    mounted() {
      axios.get('https://opentdb.com/api.php?amount=15&category=9&type=multiple')
      .then(response => this.questions = response.data.results)
      .catch(err => console.log(err));
    }
  }
</script>

<style scoped>
  .container-app {
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
  }

  .container-quiz {
    display: flex;
    width: 40%;
    height: 85%;
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
    flex-flow: column;
    text-align: center;
    border: 1px solid #e7eae0;
    border-radius: 10px;
    background-color: white;  
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  }

  .quiz-header {
    display: flex;
    width: 100%;
    height: 20%;
    border-bottom: 1px solid #e7eae0;
    justify-content: center;
    align-items: center;
    background-color: #e7eae0;
    border-radius: 10px 10px 0 0;
  }

  .quiz-main {
    display: flex;
    width: 100%;
    height: 70%;
    flex-flow: column;
    margin: auto;
  }

  .quiz-footer {
    display: flex;
    width: 100%;
    height: 10%;
    justify-content: center;
    border-top: 1px solid #e7eae0;
    background-color: #e7eae0;
    border-radius: 0 0 10px 10px;
  }

  .box-question {
    margin-top: 20px;
  }

  .box-options {
    display: flex;
    width: 100%;
    justify-content: center;
    margin: auto;
  }

  ul {
    display: flex;
    width: 80%;
    margin: 0;
    padding: 0;
    flex-flow: column;
  }

  ul li {
    list-style: none;
    line-height: 2;
    border: 1px solid #cdd2d2;  
    margin-bottom: 20px;
    border-radius: 15px;
    cursor: pointer;
    transition: 0.3s;
  }

  li:hover {
    background-color: #e7eae0;
  }

  .box-button {
    display: flex;
    width: 100%;
  }

  .box-button button {
    width: 150px;
    height: 35px;
    outline: none;
    border: 0;
    color: white;
    cursor: pointer;
    border-radius: 15px;
    margin: auto;
    background-color: #a09f9ff5;
  }

  li.correct {
    border: 1px solid rgb(74, 219, 74);
    background-color: rgb(74, 219, 74);
    color: white;
    font-weight: 600;
  }

  li.incorrect {
    border: 1px solid rgb(240, 117, 100);
    background-color: rgb(240, 117, 100);
    color: white;
    font-weight: 600;
  }

  .box-score {
    display: flex;
    width: 100%;
    height: 70%;
    flex-flow: column;
  }

  .box-score h2 {
    margin-top: 40px;
  }

  .btn-restart {
    display: flex;
    width: 100%;
    height: auto;
    justify-content: center;
    margin-top: 50px;
  }

  .btn-restart button {
    width: 150px;
    height: 35px;
    outline: none;
    border: 0;
    color: white;
    cursor: pointer;
    border-radius: 15px;
    margin: auto;
    background-color: rgb(100, 128, 202);
  }

  .step-progress {
    display: flex;
    width: 100%;
    height: 5px;
    background-color: rgb(106, 128, 202);
    transition: 0.5s;
  }

  @media screen and (max-width: 900px) {
    .container-quiz {
      width: 60%;
    }
  }
  @media screen and (max-width: 720px) {
    .container-quiz {
      width: 80%;
    }

    .box-button button {
      width: 100%;
    }
  }
</style>
