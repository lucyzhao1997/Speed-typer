<template>
 <div class="container">
      <h2>👩‍💻 Speed Typer 👨‍💻</h2>
      <small>Type the following:</small>

      <h1 id="word"></h1>

      <v-text-field
      
      hide-details="auto"
      label="Insert the word here"
    ></v-text-field>

      <p class="time-container">Time left: <span id="time">10s</span></p>

      <p class="score-container">Score: <span id="score">0</span></p>

      <div id="end-game-container" class="end-game-container"></div>
    </div>
</template>