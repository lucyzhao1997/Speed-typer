<template>
  <v-app>
    <v-main>
      <Header @level-change="handleDifficultyChange"/>
      <router-view :key="routerKey" :dLevel = "currLevel"/>
    </v-main>
  </v-app>
</template>

<script>
import Header from './components/Header.vue';

export default {
  name: 'App',

  components: {
    Header
  },

  data() {
    return {
      currLevel: 'Easy',
      routerKey: 0, 
    };
  },
  methods: {
    handleDifficultyChange(level) {
      this.currLevel = level; // Update level
      this.routerKey++; // Re-render Content via router-view
    },
  },
}
</script>
