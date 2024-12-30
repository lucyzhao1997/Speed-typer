<template>
  <v-container class="justify-center">
    <div v-if="isGameActive">
      <v-spacer></v-spacer>
      <h2>👩‍💻 Speed Typer 👨‍💻</h2>
      <small>Type the following:</small>

      <h1 id="word">{{randomWord}}</h1>

      <v-text-field v-model="currTyping" hide-details="auto" label="Insert the word here"></v-text-field>

      <p class="time-container">Time left: {{ timeLeft }} s</p>

      <p class="score-container">Score: <span id="score">{{ score }}</span></p>

      <div id="end-game-container" class="end-game-container"></div>

      <v-spacer></v-spacer>
    </div>
  </v-container>
</template>

<script>
import { generate } from "random-words";
export default {
  props: {
    dLevel: {
      type: String,
      default: 'Easy',
    },
  },
  data() {
    return {
      currTyping: '',
      randomWord: generate({minLength: 5, maxLength: 13 }),
      score: 0,
      startTime: 60000, 
      timeLeft: 60,
      isGameActive: true,
    };
  },
  watch: {
    dLevel(newLevel) {
      this.startTime = this.getStartTime(newLevel); 
      this.refreshGame(); // Reset the game state
    },
    currTyping(newVal) {
      this.compareWords(newVal);
    }
  },
  created() {
    this.startTime = this.getStartTime(); // Initialize startTime based on difficulty
    this.refreshGame();
  },
  beforeUnmount() {
    if (this.timer) {
      clearInterval(this.timer);
    }
  },
  methods: {
    initializeGame() {
      if (this.timer) {
        clearInterval(this.timer);
      }
      this.isGameActive =true;
      this.timeLeft = this.getStartTime() / 1000;

     
      this.timer = setInterval(() => {
        if (this.timeLeft > 0) {
          this.timeLeft--;
        } else {
          this.handleCountdownFinish();
        }
      }, 1000); // Trigger every second
    },
    handleCountdownFinish() {
      this.isGameActive = false;
      this.$router.push(
        { name: 'game-over' , 
          query: { score: this.score }}); 
    },
    updateScore() {
      this.score++;
    },
    refreshGame() {
      this.score = 0; 
      this.startTime = this.getStartTime(); 
      this.isGameActive = true;
      this.initializeGame(); 
    },
    getStartTime() {
      if (this.dLevel === 'Easy') {
        return 10000; 
      } else if (this.dLevel === 'Medium') {
        return 7000; 
      } else if (this.dLevel === 'Hard') {
        return 5000; 
      }else if (this.dLevel === 'Challenger') {
        return 3000; 
      }
    },
    compareWords(val) {
      if (val == this.randomWord){
        this.currTyping = '';
        this.randomWord = generate({minLength: 5, maxLength: 13 }),
        this.updateScore();
        this.initializeGame();
      }
    }
  },
};
</script>
