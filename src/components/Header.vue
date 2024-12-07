<template>
    <v-app-bar dark color="grey darken-3">
    <v-container class="d-flex justify-center">
        <v-spacer></v-spacer>
      <v-select v-model="difficulty"
      :items="['Easy', 'Medium', 'Hard']"
      label="Difficulty"
      class="mx-auto"
      dense
      style="width: 150px; margin-top: 20px;"></v-select>
      <v-spacer></v-spacer>
    </v-container>
  </v-app-bar>
  </template>
  
  <script>
  export default {
    data() {
      return {
        difficulty: 'Medium', // default value
      };
    },
  };
  </script>
  
  <style scoped>
  </style>