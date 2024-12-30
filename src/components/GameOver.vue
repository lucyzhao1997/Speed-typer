<template>
  <div class="game-over-container">
    <h1 class="game-over-title">Time ran out</h1>
    <div class="score-summary">
      <p>Score: <span id="score" class = "score">{{ score }}</span></p>
      <p>Best Score: <span id="score" class = "best-score">{{ bestScore }}</span></p>
      <p v-if="isNewRecord" class="new-record-message">
        🎉 Congratulations! You made a new record!
      </p>
      <v-spacer></v-spacer>
      <v-btn
        class="btn-reload btn btn-sm pull-xs-right"
        @click="reloadTiming"
        
      >
        <i class="ion-heart"></i>
        Try Again
      </v-btn>
    </div>
  </div>
</template>
<style scoped>
.game-over-container {
  text-align: center;
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.game-over-title {
  color: #d32f2f;
  font-size: 2em;
  margin-bottom: 15px;
}

.score-summary {
  font-size: 1.2em;
  color: #555;
}

.score {
  color: #1976d2;
  font-weight: bold;
}

.best-score {
  color: #388e3c;
  font-weight: bold;
}
.new-record-message {
  color: rgb(112, 217, 85);
  font-weight: bold;
  font-size: 1.2em;
}
.btn-reload{
  background-color:rgb(115, 234, 210) 
}
</style>
<script>
export default {
    name: "GameOver",
    data() {
    return {
      score: 0,
      bestScore: 0,
      isNewRecord: false,
    };
  },
  mounted() {
    this.score = Number(this.$route.query.score); 
    this.updateBestScore();
  },
    methods: {
        reloadTiming(){
            this.$router.push({ name: 'Game' });
            console.log("reloadTiming hit")
        },
        updateBestScore(){
          const storedBestScore = localStorage.getItem("bestScore");
          if (storedBestScore) {
            this.bestScore = Number(storedBestScore);
            if (this.score > this.bestScore) {
              this.isNewRecord = true;
              this.bestScore = this.score;
            }
          } else {
            console.log("in else")
            this.isNewRecord = true;
            this.bestScore = this.score;
            console.log(this.bestScore);
          }

          localStorage.setItem("bestScore", this.bestScore);
        }
    }
}

</script>