<template>
  <v-container class="justify-center">
    <div v-if="isGameActive">
      <v-spacer></v-spacer>
      <h2>👩‍💻 Speed Typer 👨‍💻</h2>
      <small>Type the following:</small>

      <h1 id="word">Example</h1>

      <v-text-field hide-details="auto" label="Insert the word here"></v-text-field>

      <p class="time-container">Time left: {{ timeLeft }} s</p>

      <p class="score-container">Score: <span id="score">{{ score }}</span></p>

      <div id="end-game-container" class="end-game-container"></div>

      <v-spacer></v-spacer>
    </div>
  </v-container>
</template>

<script>
export default {
  props: {
    dLevel: {
      type: String,
      default: 'Easy',
    },
  },
  data() {
    return {
      score: 0,
      startTime: 60000, // Initial time in milliseconds
      timeLeft: 60,
      isGameActive: true,
    };
  },
  watch: {
    dLevel(newLevel) {
      this.startTime = this.getStartTime(newLevel); // React to difficulty change
      this.initializeGame(); // Reset the game state
    }
  },
  created() {
    this.startTime = this.getStartTime(); // Initialize startTime based on difficulty
    this.initializeGame();
  },
  beforeUnmount() {
    if (this.timer) {
      clearInterval(this.timer);
    }
  },
  methods: {
    initializeGame() {
      this.score= 0;
      this.isGameActive =true;
      this.timeLeft = this.getStartTime() / 1000;

      // Start the countdown
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
          query: { score: this.score }}); // Redirect to GameOver page
    },
    updateScore() {
      this.score++;
    },
    refreshGame() {
      this.score = 0; // Reset the score
      this.startTime = this.getStartTime(); // Reset the timer
      this.isGameActive = true; // Reactivate the game
      this.initializeGame(); // Restart the game
    },
    getStartTime() {
      if (this.dLevel === 'Easy') {
        return 5000; // 60 seconds
      } else if (this.dLevel === 'Medium') {
        return 7000; // 45 seconds
      } else if (this.dLevel === 'Hard') {
        return 8000; // 30 seconds
      }
    },
  },
};
</script>
