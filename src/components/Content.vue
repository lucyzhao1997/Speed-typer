<template>
 <v-container class=" justify-center">
  <div v-if = "countdown >=0" >
  <v-spacer></v-spacer>
      <h2>👩‍💻 Speed Typer 👨‍💻</h2>
      <small>Type the following:</small>

      <h1 id="word"></h1>

      <v-text-field
      
      hide-details="auto"
      label="Insert the word here"
    ></v-text-field>

      <p class="time-container">Time left: 
         <vue-countdown 
          :time="getStartTime"  v-slot="{ totalSeconds  }">{{ totalSeconds }} seconds

         </vue-countdown>
        </p>

      <p class="score-container">Score: <span id="score">{{score}}</span></p>

      <div id="end-game-container" class="end-game-container"></div>

      <v-spacer></v-spacer>
    </div>
 </v-container>
</template>
<script>
export default{
  props:{
    countdown:{
      type: Number
    },
    score:{
      type: Number,
      default: 0
    },
    dLevel:{
      type: String,
      default: "Easy"
    }
  },
  methods:{
    updateScore(){
      score++;
    },
    updateTime(){
      countdown--;
    },
    refreshGame(){
      this.getStartTime()
    },
    getStartTime(){
      if (this.dLevel =="Easy"){
        return 60000
      }
    }
  }
}
</script>