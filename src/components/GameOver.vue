<template>
    <h1>Time ran out</h1>
    <p>Score: <span id="score">{{ score }}</span></p>
    <p>Best Score: <span id="score">{{ bestScore }}</span></p>
    <p v-if="isNewRecord" class="new-record-message">
      🎉 Congratulations! You made a new record!
    </p> 
    <v-btn
      class="btn btn-sm pull-xs-right"
      @click="reloadTiming"
      
    >
      <i class="ion-heart"></i>
      Try Again
    </v-btn>
</template>
<style scoped>
.new-record-message {
  color: green;
  font-weight: bold;
  font-size: 1.2em;
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

          // Save the updated best score to localStorage
          localStorage.setItem("bestScore", this.bestScore);
        }
    }
}

</script>