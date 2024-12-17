<template>
    <h1>Time ran out</h1>
    <p>Your final score is </p>
    <v-btn
      class="btn btn-sm pull-xs-right"
      @click="reloadTiming"
      
    >
      <i class="ion-heart"></i>
    </v-btn>
</template>
<script>
export default {
    name: "GameOver",
    props: {
        score: {
            type: Number,
            Required: false
        }
  },
    methods: {
        reloadTiming(){
            this.$router.push({ name: 'Game' });
            console.log("reloadTiming hit")
        }
    }
}

</script>