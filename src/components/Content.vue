<template>
  <v-container class=" game-container justify-center">
    <div v-if="isGameActive" class="game-active">
      <v-spacer></v-spacer>
      <h2 class="game-title">👩‍💻 Speed Typer 👨‍💻</h2>
      <small>Type the following:</small>

      <h1 id="word" class="game-word">{{randomWord}}</h1>

      <v-text-field class="game-text-field" v-model="currTyping" hide-details="auto" label="Insert the word here"></v-text-field>

      <p class="time-container">Time left: {{ timeLeft }} s</p>

      <p class="score-container">Score: <span id="score">{{ score }}</span></p>

      <div id="end-game-container" class="end-game-container"></div>

      <v-spacer></v-spacer>
    </div>
  </v-container>
</template>
<style scoped>
.game-container {
  text-align: center;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 600px;
  margin: auto;
}

.game-title {
  font-size: 1.8em;
  font-weight: bold;
  margin-bottom: 15px;
  color: #333;
}

.game-word {
  font-size: 2em;
  font-weight: bold;
  color: #555;
  margin: 20px 0;
}

.game-text-field {
  width: 100%;
  left: 50%
}

.time {
  font-weight: bold;
  color: #d9534f;
}

.score {
  font-weight: bold;
  color: #5cb85c;
}
</style>
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
      this.refreshGame(); 
    },
    currTyping(newVal) {
      this.compareWords(newVal);
    }
  },
  created() {
    this.startTime = this.getStartTime(); 
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
