<template>
    <h1>Time ran out</h1>
    <p>Score: <span id="score">{{ score }}</span></p>
    <v-btn
      class="btn btn-sm pull-xs-right"
      @click="reloadTiming"
      
    >
      <i class="ion-heart"></i>
      Try Again
    </v-btn>
</template>
<script>
export default {
    name: "GameOver",
    data() {
    return {
      score: 0,
    };
  },
  mounted() {
    this.score = Number(this.$route.query.score) ; 
    console.log(this.score)
  },
    methods: {
        reloadTiming(){
            this.$router.push({ name: 'Game' });
            console.log("reloadTiming hit")
        }
    }
}

</script>